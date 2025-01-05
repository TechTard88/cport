import React from 'react';
import { Box, Typography } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DangerousIcon from '@mui/icons-material/Dangerous';
import styles from './Reputation.module.css';

export default function Reputation() {
    return (
        <Box className={styles.reputationContainer}>
            <Box className={styles.reputationItem}>


                <div className={styles.reputationTextContainer}>
                    <Typography variant='body1' className={styles.iconContainer}><DangerousIcon className={styles.badIcon} /> 10% </Typography>    
                    <Typography variant='body1' className={styles.iconContainer}><WhatshotIcon className={styles.goodIcon} /> 35% </Typography>
                </div>

            </Box>
        </Box>
    );
}
