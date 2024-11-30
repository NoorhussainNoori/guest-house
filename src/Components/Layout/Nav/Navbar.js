import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Menu,
} from "@mui/icons-material";
import logo from "./../../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer for mobile menu
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box
      component="header"
      sx={{ bgcolor: "#ffa600", py: 2, px: 4, boxShadow: 1 }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo and Title */}
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src={logo}
            alt="Kabul Royal Guest House Logo"
            width={60}
            height={50}
            borderRadius={2}
            sx={{ display: { xs: "block", sm: "block" } }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              ml: 2,
              color: "white",
              fontSize: {
                sm: "1.5rem",
                xs: "1rem",
              },
            }}
          >
            Kabul Royal Guest House
          </Typography>
        </Box>

        {/* Navigation Links for larger screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
            color: "white",
          }}
        >
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/rooms"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Rooms
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </Button>
        </Box>

        {/* Hamburger Menu for smaller screens */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" }, color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <Menu />
        </IconButton>

        {/* Drawer for mobile view */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem
                button
                component={Link}
                to="/"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/rooms"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Rooms" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/about"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/contact"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            color: "white",
            gap: 1,
            alignItems: "center",
            display: {
              lg: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
