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
  TableContainer,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Fade } from "@mui/material";

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false); // Track deletion loading state

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        setContacts(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleDeleteClick = (contact) => {
    setContactToDelete(contact);
    setOpenDialog(true); // Open confirmation dialog
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true); // Start loading state

    try {
      await deleteDoc(doc(db, "contacts", contactToDelete.id));
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactToDelete.id)
      );
      setIsDeleting(false); // Stop loading state
      setContactToDelete(null);
      setOpenDialog(false); // Close dialog
    } catch (error) {
      console.error("Error deleting contact:", error);
      setIsDeleting(false); // Stop loading state in case of error
    }
  };

  const handleDeleteCancel = () => {
    setContactToDelete(null);
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
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Message</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Contact Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact, index) => (
                <TableRow
                  key={contact.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                  }}
                >
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.message}</TableCell>
                  <TableCell>
                    {contact.date
                      ? new Date(contact.date).toLocaleDateString("en-US", {
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
                      onClick={() => handleDeleteClick(contact)}
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
            Are you sure you want to delete this contact?
          </DialogTitle>
          <DialogActions>
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

export default ContactsTable;
