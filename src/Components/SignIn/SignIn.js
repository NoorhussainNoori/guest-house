import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./../../firebaseConfig"; // Import Firebase Auth
import { useNavigate } from "react-router-dom"; // For navigation

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router navigation

  // Handle Login Submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please fill out all fields!");
      return;
    }

    try {
      // Firebase Authentication login
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign-In Successful!");
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  // Handle Forgot Password
  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email to reset password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent! Check your email.");
    } catch (error) {
      toast.error("Error sending password reset email. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: 5,
            maxWidth: 400,
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: "bold",
              color: "#ffa600",
              mb: 3,
            }}
          >
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                marginBottom: 3,
                "& label.Mui-focused": { color: "#ffa600" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                marginBottom: 3,
                "& label.Mui-focused": { color: "#ffa600" },
                "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#ffa600",
                "&:hover": { backgroundColor: "#ff8a00" },
                padding: 1.5,
                fontSize: "16px",
                color: "#fff",
              }}
            >
              Sign In
            </Button>
          </form>

          <Button
            onClick={handleForgotPassword}
            sx={{
              color: "#ffa600",
              marginTop: 2,
              textDecoration: "underline",
              display: "block",
              textAlign: "center",
            }}
          >
            Forgot password?
          </Button>

          <a
            href="/register"
            style={{
              color: "#ffa600",
              textDecoration: "none",
              marginTop: "16px",
              display: "block",
              textAlign: "center",
            }}
          >
            Don’t have an account? Sign up
          </a>
        </Paper>
      </Container>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};

export default SignIn;
