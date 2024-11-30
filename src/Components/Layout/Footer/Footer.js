import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#333",
        py: 6,
        color: "white",
        mt: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Kabul Royal Guest House offers premium hospitality and comfort in
              the heart of the city. Book your stay and experience luxury like
              never before.
            </Typography>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Button color="inherit">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
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
              <Button color="inherit">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Button>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Behind Majid Mall, Shar-e-Naw, Kabul, Afghanistan
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Email: info@kabulroyalguesthouse.com
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Phone: +93 76 4175307
            </Typography>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Follow Us
            </Typography>
            <Box display="flex" gap={2} mt={1}>
              <a
                href="https://www.facebook.com/profile.php?id=61564877125693"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "10px", color: "#eee" }}
              >
                <Facebook sx={{ fontSize: 40 }} />
              </a>
              <a
                href="https://x.com/kabulroyal1"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "10px", color: "#eee" }}
              >
                <Twitter sx={{ fontSize: 40 }} />
              </a>
              <a
                href="https://instagram.com/kabulroyal1"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: "10px", color: "#eee" }}
              >
                <Instagram sx={{ fontSize: 40 }} />
              </a>
            </Box>
          </Grid>
        </Grid>

        <Box
          mt={4}
          borderTop={1}
          borderColor="rgba(255, 255, 255, 0.1)"
          pt={4}
          textAlign="center"
        >
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Kabul Royal Guest House. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
