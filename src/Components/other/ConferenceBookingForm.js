import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Box,
} from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material"; // Import icons
import { addDoc, collection } from "firebase/firestore";
import { db } from "./../../firebaseConfig"; // Import Firestore database
import { ToastContainer } from "react-toastify"; // For toast notifications
import "react-toastify/dist/ReactToastify.css"; // React Toastify styles

const ConferenceBookingForm = ({ open, handleClose, selectedRoom }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({}); // State to track validation errors
  const [loading, setLoading] = useState(false); // Loading state for button
  const [successDialogOpen, setSuccessDialogOpen] = useState(false); // Control success dialog
  const [errorDialogOpen, setErrorDialogOpen] = useState(false); // Control error dialog

  // Form validation function
  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/; // Assuming 10 digits for phone/WhatsApp number

    if (!formData.name) {
      formErrors.name = "Full Name is required.";
    }
    if (!formData.email || !emailPattern.test(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone || !phonePattern.test(formData.phone)) {
      formErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!formData.company) {
      formErrors.company = "Company Name is required.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return; // If validation fails, stop submission
    }

    setLoading(true); // Start loading spinner

    try {
      await addDoc(collection(db, "conference-booking"), {
        ...formData,
        roomType: selectedRoom.title, // This will be 'Conference Hall'
        date: new Date().toISOString(),
      });

      // Show success dialog and stop loading spinner
      setLoading(false);
      setSuccessDialogOpen(true);
    } catch (error) {
      // Show error dialog and stop loading spinner
      setLoading(false);
      setErrorDialogOpen(true);
    }
  };

  const closeSuccessDialog = () => {
    setSuccessDialogOpen(false);
    handleClose(); // Close the form after success dialog closes
  };

  const closeErrorDialog = () => {
    setErrorDialogOpen(false);
  };

  return (
    <>
      {/* Conference Booking Form */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle sx={{ color: "#ffa600" }}>
          Book {selectedRoom?.title}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
            Please provide your information below to inquire about the booking.
          </Typography>

          {/* Form Fields */}
          <TextField
            margin="normal"
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
            sx={{
              "& label.Mui-focused": { color: "#ffa600" },
              "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
            }}
          />
          <TextField
            margin="normal"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              "& label.Mui-focused": { color: "#ffa600" },
              "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
            }}
          />
          <TextField
            margin="normal"
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{
              "& label.Mui-focused": { color: "#ffa600" },
              "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
            }}
          />
          <TextField
            margin="normal"
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.company}
            helperText={errors.company}
            sx={{
              "& label.Mui-focused": { color: "#ffa600" },
              "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
            }}
          />
          <TextField
            margin="normal"
            label="Additional Information"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            sx={{
              "& label.Mui-focused": { color: "#ffa600" },
              "& .MuiInput-underline:after": { borderBottomColor: "#ffa600" },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#ffa600" }}>
            Cancel
          </Button>
          <Box sx={{ position: "relative" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ bgcolor: "#ffa600", ":hover": { bgcolor: "#ff8a00" } }}
              disabled={loading} // Disable button during loading
            >
              {loading ? (
                <>
                  Submit Booking <CircularProgress size={20} sx={{ ml: 1 }} />
                </>
              ) : (
                "Submit Booking"
              )}
            </Button>
          </Box>
        </DialogActions>
      </Dialog>

      {/* Enhanced Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={closeSuccessDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <CheckCircleOutline sx={{ fontSize: 80, color: "green", mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Booking Successfully Submitted!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Your booking for <strong>{selectedRoom?.title}</strong> has been
            successfully received!
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Our team will review your request and get in touch with you soon.
          </Typography>
          <Typography variant="h6" sx={{ color: "#555", mb: 1 }}>
            Booking Details:
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            <strong>Conference Hall:</strong> {selectedRoom?.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            <strong>Company Name:</strong> {formData.company}
          </Typography>
          <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
            <strong>Date:</strong> {new Date().toLocaleDateString()}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeSuccessDialog}
            variant="contained"
            sx={{ bgcolor: "#ffa600", ":hover": { bgcolor: "#ff8a00" } }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Enhanced Error Dialog */}
      <Dialog
        open={errorDialogOpen}
        onClose={closeErrorDialog}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent sx={{ textAlign: "center", p: 4 }}>
          <ErrorOutline sx={{ fontSize: 80, color: "red", mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Booking Failed!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Unfortunately, there was an error while processing your booking for{" "}
            <strong>{selectedRoom?.title}</strong>.
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Please try again later or contact our support team for assistance.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeErrorDialog}
            variant="contained"
            sx={{ bgcolor: "#ffa600", ":hover": { bgcolor: "#ff8a00" } }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default ConferenceBookingForm;
