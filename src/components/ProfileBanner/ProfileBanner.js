import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./ProfileBanner.module.css";
import { Typography } from "@mui/material";

export default function UserCard() {
    return (
        <div className={styles.container}>
            <img className={styles.imgBanner} src={`${process.env.PUBLIC_URL}/profileBanners/12345.jpg`} alt="Profile Banner" />
            <div className={styles.profilePicCard}>
                <Avatar
                    className={`${styles.profilePic}`}
                    alt="Test User 1"
                    src={`${process.env.PUBLIC_URL}/profilePics/12345.jpg`}
                />
            </div>
            <Typography className={styles.userName} variant="h4">
                <div className={styles.userNameContainer}>Justin Case</div>
            </Typography>
        </div>
    );
}
