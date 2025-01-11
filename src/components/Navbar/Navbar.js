import React, { useState, useMemo, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';


export default function Navbar({navLinks}) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const navigate = useNavigate();

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar>
                <Typography variant="h6" className={styles.logo}>
                    <img className={styles.cportLogo} alt="cport logo" src={`${process.env.PUBLIC_URL}/cport.png`} />
                </Typography>
                <Box className={styles.desktopNav}>
                    {navLinks ?
                        navLinks.map((link) => (
                            <Button key={link["text"]} color="inherit" sx={{ marginRight: 2 }} onClick={() => navigate(link["path"])}>
                                {link["text"]}
                            </Button>
                        ))
                    : null}
                    <WalletMultiButton className={styles.smallButton} />
                </Box>
                <IconButton
                    color="inherit"
                    edge="end"
                    className={styles.mobileMenuButton}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    className={styles.drawer}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {navLinks ?
                            navLinks.map((link) => (
                                <ListItem key={link["text"]} disablePadding>
                                    <ListItemButton onClick={() => navigate(link["path"])}>
                                        <ListItemText primary={link["text"]} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        : null}
                        <WalletMultiButton className={styles.smallButton} />
                    </List>
                </Box>
            </Drawer>
        </AppBar>

    );
};
