import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import { Phone, MailOutline, Smartphone } from "@mui/icons-material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore"; // Firestore functions
import { db } from "./../../firebaseConfig"; // Import Firestore database config

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false); // For loading button state
  const [successMessage, setSuccessMessage] = useState("");

  // Form validation function
  const validateForm = () => {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      errors.name = "Name is required.";
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message) {
      errors.message = "Message is required.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); // Start loading spinner

    try {
      // Add the form data to Firestore under a "contacts" collection
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date().toISOString(), // Add timestamp
      });

      // Reset form and show success message
      setSuccessMessage(
        "Message sent successfully! We'll get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" });
      setFormErrors({});
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setLoading(false); // Stop loading spinner
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 6 }}
      >
        Contact Us
      </Typography>

      {/* Contact Sections */}
      <Grid container spacing={4}>
        {/* Call Us Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center", height: 300 }}>
              <Phone sx={{ fontSize: 50, color: "#007bff" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                Call Us
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Have a question? Call us and we’ll be happy to assist you.
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <Smartphone sx={{ verticalAlign: "middle" }} />{" "}
                <a
                  href="tel:+93764175307"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  +93 76 417 5307
                </a>
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email Us Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center", height: 300 }}>
              <MailOutline sx={{ fontSize: 50, color: "#ff3d00" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                Email Us
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Send us an email and we’ll respond within a business day.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#ffa600",
                  ":hover": { bgcolor: "#eee" },
                }}
                href="mailto:info@kabulroyalguesthouse.com"
              >
                EMAIL
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center", height: 300 }}>
              <Typography
                sx={{ fontSize: 50, color: "#333", fontWeight: "bold" }}
              >
                #
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                Social Media
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                Stay connected with us through social media.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <a
                  href="https://www.facebook.com/profile.php?id=61564877125693"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px", color: "#ffa600" }}
                >
                  <Facebook sx={{ fontSize: 40 }} />
                </a>
                <a
                  href="https://x.com/kabulroyal1"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px", color: "#1DA1F2" }}
                >
                  <Twitter sx={{ fontSize: 40 }} />
                </a>
                <a
                  href="https://instagram.com/kabulroyal1"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "10px", color: "#C13584" }}
                >
                  <Instagram sx={{ fontSize: 40 }} />
                </a>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contact Us Form */}
      <Box component="form" sx={{ mt: 8 }} onSubmit={handleSubmit}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
        >
          Contact Us Form
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              fullWidth
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              error={!!formErrors.message}
              helperText={formErrors.message}
            />
          </Grid>
        </Grid>

        {/* Show success message */}
        {successMessage && (
          <Typography
            variant="body1"
            sx={{ color: "green", textAlign: "center", mt: 4 }}
          >
            {successMessage}
          </Typography>
        )}

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#007bff", ":hover": { bgcolor: "#0056b3" } }}
            type="submit"
            disabled={loading} // Disable button during submission
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
