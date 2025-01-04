import React, { useState } from "react";
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

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const navLinks = ["Home", "About", "Services", "Contact"];

    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" className={styles.logo}>
                    MyLogo
                </Typography>

                {/* Desktop Navigation */}
                <Box className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Button key={link} color="inherit" sx={{ marginRight: 2 }}>
                            {link}
                        </Button>
                    ))}
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    color="inherit"
                    edge="end"
                    className={styles.mobileMenuButton}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer */}
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
                        {navLinks.map((link) => (
                            <ListItem key={link} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={link} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
