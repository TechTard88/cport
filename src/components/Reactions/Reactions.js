import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import ReportIcon from '@mui/icons-material/Report';
import styles from './Reactions.module.css';

export default function Reactions() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => setLikes((prev) => prev + 1);
    const handleDislike = () => setDislikes((prev) => prev + 1);
    const handleShare = () => {
        navigator.share
            ? navigator.share({
                  title: 'Check this out!',
                  url: window.location.href,
              }).catch((error) => console.error('Share failed:', error))
            : alert('Sharing is not supported in this browser.');
    };
    const handleReport = () => alert('Reported successfully!');

    return (
        <Box className={styles.container}>
            {/* Likes */}
            <Tooltip title="Like">
                <Box display="flex" alignItems="center">
                    <IconButton className={styles.iconButton} onClick={handleLike}>
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography variant="body2" className={styles.text}>
                        {likes}
                    </Typography>
                </Box>
            </Tooltip>

            {/* Dislikes */}
            <Tooltip title="Dislike">
                <Box display="flex" alignItems="center">
                    <IconButton className={styles.iconButton} onClick={handleDislike}>
                        <ThumbDownIcon />
                    </IconButton>
                    <Typography variant="body2" className={styles.text}>
                        {dislikes}
                    </Typography>
                </Box>
            </Tooltip>

            {/* Share */}
            <Tooltip title="Share">
                <IconButton className={styles.iconButton} onClick={handleShare}>
                    <ShareIcon />
                </IconButton>
            </Tooltip>

            {/* Report */}
            <Tooltip title="Report">
                <IconButton className={styles.iconButton} onClick={handleReport}>
                    <ReportIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
