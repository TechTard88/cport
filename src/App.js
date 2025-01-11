import React, { useEffect, useState } from 'react';
import Timeline from './pages/Timeline/Timeline.js';
import BasicPost from './components/BasicPost/BasicPost.js';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile/Profile.js';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/posts/posts.json`);
            const jsonData = await response.json();
            setPosts(jsonData);
        };
        fetchPosts();
    }, []);

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/profilePics/*" element={null} />

                    <Route path='/' element={
                        <Timeline>
                            {posts.map((post) => (
                                <BasicPost post={post} />
                            ))}
                        </Timeline>
                    }></Route>
                    <Route path='/profile' element={
                        <Profile />
                    }></Route>

                </Routes>
            </Router>
        </>
    );
};

export default App;
