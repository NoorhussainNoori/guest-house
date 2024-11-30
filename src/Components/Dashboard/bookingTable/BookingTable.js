import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  TableContainer,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Fade } from "@mui/material";

const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion loading state

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        setBookings(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleDeleteClick = (booking) => {
    setBookingToDelete(booking);
    setOpenDialog(true); // Open confirmation dialog
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true); // Start loading state

    try {
      await deleteDoc(doc(db, "bookings", bookingToDelete.id));

      // Remove booking from state after deletion
      setBookings((prevBookings) =>
        prevBookings.filter((booking) => booking.id !== bookingToDelete.id)
      );

      setIsDeleting(false); // Stop loading state
      setBookingToDelete(null);
      setOpenDialog(false); // Close dialog
    } catch (error) {
      console.error("Error deleting booking:", error);
      setIsDeleting(false); // Stop loading state in case of error
    }
  };

  const handleDeleteCancel = () => {
    setBookingToDelete(null);
    setOpenDialog(false); // Close dialog
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fade in={!loading} timeout={1000}>
      <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>

<TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Room Type</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Booking Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow
                  key={booking.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                  }}
                >
                  <TableCell>{booking.roomType}</TableCell>
                  <TableCell>{booking.name}</TableCell>
                  <TableCell>{booking.email}</TableCell>
                  <TableCell>{booking.phone}</TableCell>
                  <TableCell>
                    {booking.date
                      ? new Date(booking.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Invalid Date"}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={() => handleDeleteClick(booking)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Confirmation Dialog */}
        <Dialog
          open={openDialog}
          onClose={handleDeleteCancel}
          aria-labelledby="delete-confirmation-dialog"
        >
          <DialogTitle id="delete-confirmation-dialog">
            Are you sure you want to delete this booking?
          </DialogTitle>
          <DialogActions>
            {/* Show loader or disable buttons while deleting */}
            {isDeleting ? (
              <Box sx={{ display: "flex", alignItems: "center", m: 1 }}>
                <CircularProgress size={24} sx={{ mr: 2 }} />
                <span>Deleting...</span>
              </Box>
            ) : (
              <>
                <Button
                  onClick={handleDeleteCancel}
                  color="primary"
                  disabled={isDeleting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteConfirm}
                  color="secondary"
                  disabled={isDeleting}
                >
                  Delete
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      </Paper>
    </Fade>
  );
};

export default BookingTable;
