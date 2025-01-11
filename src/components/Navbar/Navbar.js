import React, { useState, useMemo } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';


export default function Navbar() {

    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new UnsafeBurnerWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

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

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <AppBar position="static" className={styles.appBar}>
                        <Toolbar>
                            {/* Logo */}
                            <Typography variant="h6" className={styles.logo}>
                                <img className={styles.cportLogo} alt="cport logo" src={`${process.env.PUBLIC_URL}/cport.png`} />
                            </Typography>

                            {/* Desktop Navigation */}
                            <Box className={styles.desktopNav}>
                                {navLinks.map((link) => (
                                    <Button key={link["text"]} color="inherit" sx={{ marginRight: 2 }} onClick={() => navigate(link["path"])}>
                                        {link["text"]}
                                    </Button>
                                ))}
                                <WalletMultiButton className={styles.smallButton} />
                            </Box>

                            {/* Mobile Menu Button */}
                            <IconButton
                                color="inherit"
                                edge="end"
                                className={styles.mobileMenuButton}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>

                        {/* Mobile Drawer */}
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            <Box
                                className={styles.drawer}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {navLinks.map((link) => (
                                        <ListItem key={link["text"]} disablePadding>
                                            <ListItemButton onClick={() => navigate(link["path"])}>
                                                <ListItemText primary={link["text"]} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                    <WalletMultiButton className={styles.smallButton} />
                                </List>
                            </Box>
                        </Drawer>
                    </AppBar>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
