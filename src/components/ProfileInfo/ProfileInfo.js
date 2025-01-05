import { Typography } from '@mui/material'
import styles from './ProfileInfo.module.css'
import Divider from '@mui/material/Divider';
import Reputation from '../Reputation/Reputation';


export default function ProfileInfo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.reputationText}>
                    <Reputation />
                </div>
                <div className={styles.bio}>
                    <Typography className={styles.bioText} variant="body1">
                    "Professional overthinker, part-time snack enthusiast, and full-time champion of hitting 'Reply All' by mistake. Powered by coffee and questionable life choices."
                    </Typography>
                </div>
            </div>
            <Divider className={styles.divider} />
            <div className={styles.timelineViewActionsContainer}>
                <Typography className={styles.timelineViewActions} variant="button" gutterBottom>
                    Posts
                </Typography>
                <Typography className={styles.timelineViewActions} variant="button" gutterBottom>
                    Media
                </Typography>
            </div>
            <Divider className={styles.divider} />
        </>
    )
}