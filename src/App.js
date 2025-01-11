import React, { useEffect, useState, useMemo } from "react";
import Timeline from "./pages/Timeline/Timeline.js";
import BasicPost from "./components/BasicPost/BasicPost.js";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile.js";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { usePubkey } from "./utils/usePubkey.js";

const AppContent = () => {
    const pubkey = usePubkey(); // usePubkey is now called inside WalletProvider context
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/posts/posts.json`);
            const jsonData = await response.json();
            setPosts(jsonData);
        };
        fetchPosts();
    }, []);

    const navLinks = [
        {
            "text": "Home",
            "path": "/"
        },
        {
            "text": "Profile",
            "path": "/profile"
        }
    ];

    return pubkey ? (
        <Router>
            <Navbar navLinks={navLinks}/>
            <Routes>
                <Route path="/profilePics/*" element={null} />
                <Route
                    path="/"
                    element={
                        <Timeline>
                            {posts.map((post) => (
                                <BasicPost key={post.id} post={post} />
                            ))}
                        </Timeline>
                    }
                />
                <Route path="/profile" element={<Profile pubkey={pubkey} />} />
            </Routes>
        </Router>
    ) : (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route
                        path="*"
                        element={
                            <h1>CONNECT YOUR WALLET!!!</h1>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
};

const App = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], [network]);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <AppContent /> {/* AppContent now runs inside WalletProvider */}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
