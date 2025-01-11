import React, { useEffect } from "react";
import ProfileGallery from "../../components/ProfileGallery/ProfileGallery";
import styles from './Profile.module.css';
import ProfileBanner from "../../components/ProfileBanner/ProfileBanner";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import CreatePost from "../../components/CreatePost/CreatePost";

const postFields = [
    { name: "post", label: "post", required: true },
];

export default function Profile({pubkey}) {
    

    const handleSubmit = (data) => {
        // TODO!!!
        // POST THE DATA TO THE API
        data["submitted-by"] = pubkey;
        console.log("Submitted Data:", data);
    };

    return (
        <>
            <div className={styles.pageContainer}>
                <div className={styles.profileContainer}>
                    <ProfileBanner />
                    <ProfileInfo />
                    <div className={styles.createPostContainer}>
                        <CreatePost postFields={postFields} handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </>
    );
};