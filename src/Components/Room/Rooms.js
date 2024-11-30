import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import {
  Wifi,
  LocalParking,
  BreakfastDining,
  LocalLaundryService,
  AcUnit,
  Bathtub,
  Balcony,
  People,
  Event,
  MeetingRoom,
  Lightbulb,
  Assessment,
  Create,
} from "@mui/icons-material";
import BookingForm from "./../other/BookingForm"; // Import the booking form component
import ConferenceBookingForm from "./../other/ConferenceBookingForm"; // Import conference booking form

const roomData = [
  {
    title: "Single Bed Room",
    price: "2000 AFN",
    features: [
      "Free Breakfast",
      "Free Wifi",
      "Free Parking",
      "Free Toiletries",
      "Air Condition",
    ],
  },
  {
    title: "Twin Room",
    price: "3000 AFN",
    features: [
      "Free Breakfast",
      "Free Wifi",
      "Free Parking",
      "Free Toiletries",
      "Private Bathroom",
      "Air Condition",
      "Living Area",
    ],
  },
  {
    title: "Double Bed Room",
    price: "3000 AFN",
    features: [
      "Free Breakfast",
      "Free Wifi",
      "Free Parking",
      "Free Toiletries",
      "Private Bathroom",
      "Air Condition",
      "Living Area",
    ],
  },
  {
    title: "Triple Bed Room",
    price: "4000 AFN",
    features: [
      "Free Breakfast",
      "Free Wifi",
      "Free Parking",
      "Free Toiletries",
      "Private Bathroom",
      "Air Condition",
      "Living Area",
    ],
  },
  {
    title: "VIP Bed Room",
    price: "5000 AFN",
    features: [
      "Free Breakfast",
      "Free Wifi",
      "Free Parking",
      "Free Toiletries",
      "Extra Bed",
      "Private Balcony",
      "Private Bathroom",
      "Air Condition",
      "Living Area",
    ],
  },
];

const conferenceHallData = {
  title: "Conference Hall",
  price: "Inquire for Pricing",
  features: [
    "Accommodates up to 40 attendees",
    "High-definition projectors",
    "High-Speed Wifi",
    "Air Conditioned and well-Ventilated",
    "Dedicated technical and event staff",
    "Secure Parking area",
    "Adjustable lighting system",
    "Flip Chart with Stand",
    "Notebook and Pen",
  ],
};

const Rooms = () => {
  const [openForm, setOpenForm] = useState(false);
  const [isConference, setIsConference] = useState(false); // New state to track if it's a conference booking
  const [selectedRoom, setSelectedRoom] = useState(null); // Room being booked

  const handleOpenForm = (room, conference = false) => {
    setSelectedRoom(room);
    setIsConference(conference); // Set whether it's a conference booking
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSelectedRoom(null); // Reset selected room
    setIsConference(false); // Reset conference state
  };

  return (
    <Box
      component="section"
      sx={{ bgcolor: "#f8f8f8", py: 8, px: { xs: 2, sm: 4, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#333",
            mb: 5,
            fontFamily: "'Roboto Slab', serif",
            letterSpacing: 1.5,
          }}
        >
          MAKE A RESERVATION
        </Typography>

        {/* Introductory Text */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 5,
            color: "#555",
            fontSize: "1.125rem",
            lineHeight: 1.8,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Choose from our luxurious rooms or book our spacious conference hall
          for your next event. We offer a range of modern amenities to ensure
          that your stay or event is comfortable, convenient, and memorable.
        </Typography>

        <Grid container spacing={4}>
          {/* Room Cards */}
          {roomData.map((room, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%", boxShadow: 3 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
                  >
                    {room.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#ffa600",
                      textAlign: "center",
                    }}
                  >
                    {room.price}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  {room.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      sx={{ mb: 1, display: "flex", alignItems: "center" }}
                    >
                      {feature === "Free Breakfast" && (
                        <BreakfastDining sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Free Wifi" && (
                        <Wifi sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Free Parking" && (
                        <LocalParking sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Free Toiletries" && (
                        <LocalLaundryService sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Air Condition" && (
                        <AcUnit sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Private Bathroom" && (
                        <Bathtub sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Private Balcony" && (
                        <Balcony sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature === "Living Area" && (
                        <MeetingRoom sx={{ mr: 1, color: "#ffa600" }} />
                      )}
                      {feature}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ffa600",
                      ":hover": { bgcolor: "#ff8a00" },
                      px: 4,
                    }}
                    onClick={() => handleOpenForm(room)} // Open form with selected room
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}

          {/* Conference Hall */}
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}
                >
                  {conferenceHallData.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#ffa600",
                    textAlign: "center",
                  }}
                >
                  {conferenceHallData.price}
                </Typography>
                <Divider sx={{ my: 2 }} />
                {conferenceHallData.features.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{ mb: 1, display: "flex", alignItems: "center" }}
                  >
                    {feature === "Accommodates up to 40 attendees" && (
                      <People sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "High-definition projectors" && (
                      <Event sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "High-Speed Wifi" && (
                      <Wifi sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "Air Conditioned and well-Ventilated" && (
                      <AcUnit sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "Dedicated technical and event staff" && (
                      <People sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "Secure Parking area" && (
                      <LocalParking sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "Adjustable lighting system" && (
                      <Lightbulb sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "Flip Chart with Stand" && (
                      <Assessment sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature === "Notebook and Pen" && (
                      <Create sx={{ mr: 1, color: "#ffa600" }} />
                    )}
                    {feature}
                  </Typography>
                ))}
              </CardContent>
              <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#ffa600",
                    ":hover": { bgcolor: "#ff8a00" },
                    px: 4,
                  }}
                  onClick={() => handleOpenForm(conferenceHallData, true)} // Handle Conference Booking
                >
                  Inquire Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Conditional Rendering for the Forms */}
        {selectedRoom && !isConference && (
          <BookingForm
            open={openForm}
            handleClose={handleCloseForm}
            selectedRoom={selectedRoom}
          />
        )}

        {selectedRoom && isConference && (
          <ConferenceBookingForm
            open={openForm}
            handleClose={handleCloseForm}
            selectedRoom={selectedRoom}
          />
        )}
      </Container>
    </Box>
  );
};

export default Rooms;
