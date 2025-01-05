import { Card } from "@mui/material";
import ProfileGallery from "../../components/ProfileGallery/ProfileGallery";
import styles from './Profile.module.css';
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

export default function Profile() {
    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.profileContainer}>
                    <ProfileBanner />
                    <ProfileInfo />
                    {/* <ProfileGallery /> */}
                </div>
            </div>
        </>
    );
};