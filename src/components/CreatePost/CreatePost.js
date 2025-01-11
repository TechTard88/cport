import React, { useState } from "react";
import { div, Button, TextField, Typography } from "@mui/material";
import styles from "./CreatePost.module.css"

export default function CreatePost({ postFields, handleSubmit }) {

    const [formData, setFormData] = useState(
        postFields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    return (
        <div
            className={styles.createPostContainer}
            // component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
        >
            <Typography variant="h6" gutterBottom>
                Reusable Form
            </Typography>
            {postFields.map((field) => (
                <TextField
                    className={styles.textField}
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type || "text"}
                    value={formData[field.name]}
                    onChange={handleChange}
                    fullWidth
                    required={field.required || false}
                />
            ))}
            <Button className={styles.submitButton} type="submit" variant="contained" onClick={() => handleSubmit(formData)}>
                Submit Post
            </Button>
        </div>
    );
};
