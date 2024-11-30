import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
  Fade,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import BookingTable from "./bookingTable/BookingTable";
import ConferenceTable from "./ConferenceBooking/ConferenceBooking";
import ContactsTable from "./ContactTable/ContactsTable";
import TopBar from "./TopBar/TopBar";
import RoomIcon from "@mui/icons-material/Hotel";
import EventIcon from "@mui/icons-material/Event";
import ContactMailIcon from "@mui/icons-material/ContactMail";

// Mock loading state for each section
const Dashboard = ({ user }) => {
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [loadingConferences, setLoadingConferences] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [bookingSummary, setBookingSummary] = useState({});
  const [conferenceCount, setConferenceCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsSnapshot = await getDocs(collection(db, "bookings"));
        const bookings = bookingsSnapshot.docs.map((doc) => doc.data());

        // Calculate booking summary by room type
        const roomSummary = bookings.reduce((acc, booking) => {
          const roomType = booking.roomType || "Unknown";
          acc[roomType] = (acc[roomType] || 0) + 1;
          return acc;
        }, {});

        setBookingSummary(roomSummary);
        setLoadingBookings(false);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setLoadingBookings(false);
      }
    };

    const fetchConferences = async () => {
      try {
        const conferenceSnapshot = await getDocs(
          collection(db, "conference-booking")
        );
        setConferenceCount(conferenceSnapshot.size);
        setLoadingConferences(false);
      } catch (error) {
        console.error("Error fetching conferences:", error);
        setLoadingConferences(false);
      }
    };

    const fetchContacts = async () => {
      try {
        const contactSnapshot = await getDocs(collection(db, "contacts"));
        setContactCount(contactSnapshot.size);
        setLoadingContacts(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setLoadingContacts(false);
      }
    };

    fetchBookings();
    fetchConferences();
    fetchContacts();
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <TopBar />
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 10, // Space from top bar
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          {/* Summary Section */}
          <Grid container spacing={4}>
            {/* Booking Summary */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #F9D423 0%, #FF4E50 100%)",
                  color: "white",
                  minHeight: 150,
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <RoomIcon sx={{ fontSize: 48, color: "white" }} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        Room Bookings Summary
                      </Typography>
                      {loadingBookings ? (
                        <CircularProgress color="inherit" />
                      ) : (
                        Object.keys(bookingSummary).map((roomType) => (
                          <Typography key={roomType} variant="body1">
                            {roomType}: {bookingSummary[roomType]} bookings
                          </Typography>
                        ))
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Conference Summary */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #56CCF2 0%, #2F80ED 100%)",
                  color: "white",
                  minHeight: 150,
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <EventIcon sx={{ fontSize: 48, color: "white" }} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        Conference Bookings
                      </Typography>
                      {loadingConferences ? (
                        <CircularProgress color="inherit" />
                      ) : (
                        <Typography variant="body1">
                          {conferenceCount} conference bookings
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Requests Summary */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #C86DD7 0%, #3023AE 100%)",
                  color: "white",
                  minHeight: 150,
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <ContactMailIcon sx={{ fontSize: 48, color: "white" }} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        Contact Requests
                      </Typography>
                      {loadingContacts ? (
                        <CircularProgress color="inherit" />
                      ) : (
                        <Typography variant="body1">
                          {contactCount} contact submissions
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {/* Room Bookings */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: "secondary.main",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Room Bookings
              </Typography>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                {loadingBookings ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <Fade in={!loadingBookings} timeout={1000}>
                    <Box>
                      <BookingTable />
                    </Box>
                  </Fade>
                )}
              </Paper>
            </Grid>

            {/* Conference Bookings */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: "secondary.main",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Conference Bookings
              </Typography>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                {loadingConferences ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <Fade in={!loadingConferences} timeout={1000}>
                    <Box>
                      <ConferenceTable />
                    </Box>
                  </Fade>
                )}
              </Paper>
            </Grid>

            {/* Contact Requests */}
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: "bold",
                  color: "secondary.main",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                Contact Requests
              </Typography>
              <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
                {loadingContacts ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "200px",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                ) : (
                  <Fade in={!loadingContacts} timeout={1000}>
                    <Box>
                      <ContactsTable />
                    </Box>
                  </Fade>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
