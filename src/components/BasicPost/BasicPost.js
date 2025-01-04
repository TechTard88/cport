import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import Reactions from '../Reactions/Reactions';
import styles from './BasicPost.module.css';

export default function BasicPost({ post }) {
    return (
        <Card className={styles.postCard}>
            <CardContent className={styles.cardContent}>
                <Typography gutterBottom className={styles.authorSection}>
                    <Stack direction="row" spacing={2}>
                        <Avatar
                            alt={post['author']}
                            src={`/profilePics/${post['user-id']}.jpg`}
                            className={styles.avatar}
                        />
                        <Typography
                            variant="h6"
                            component="div"
                            className={styles.authorName}
                        >
                            {post['author']}
                        </Typography>
                    </Stack>
                </Typography>
                <Typography variant="body2" className={styles.postBody}>
                    {post['post']}
                </Typography>
            </CardContent>
            <CardActions className={styles.reactionsContainer}>
                <Reactions />
            </CardActions>
        </Card>
    );
}
