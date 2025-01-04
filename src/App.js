import React, { useEffect, useState } from 'react';
import Timeline from './pages/Timeline/Timeline.js';
import BasicPost from './components/BasicPost/BasicPost.js';
import Navbar from './components/Navbar/Navbar.js';

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
        <Navbar />
        <Timeline>
            {posts.map((post) => (
                <BasicPost post={post} />
            ))}
        </Timeline>
      </>
    );
};

export default App;
