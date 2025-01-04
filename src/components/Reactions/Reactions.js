import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import ReportIcon from '@mui/icons-material/Report';

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
        <Box
            display="flex"
            alignItems="center"
            minWidth={'100%'}
            justifyContent="space-evenly"
            sx={{backgroundColor: '#f5f5f5', borderRadius: '8px' }}
        >
            {/* Likes */}
            <Tooltip title="Like">
                <Box display="flex" alignItems="center">
                    <IconButton onClick={handleLike}>
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography variant="body2">{likes}</Typography>
                </Box>
            </Tooltip>

            {/* Dislikes */}
            <Tooltip title="Dislike">
                <Box display="flex" alignItems="center">
                    <IconButton onClick={handleDislike}>
                        <ThumbDownIcon />
                    </IconButton>
                    <Typography variant="body2">{dislikes}</Typography>
                </Box>
            </Tooltip>

            {/* Share */}
            <Tooltip title="Share">
                <IconButton onClick={handleShare}>
                    <ShareIcon />
                </IconButton>
            </Tooltip>

            {/* Report */}
            <Tooltip title="Report">
                <IconButton onClick={handleReport}>
                    <ReportIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};
