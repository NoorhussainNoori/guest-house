import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { Hotel, Business, MeetingRoom, RoomService } from "@mui/icons-material";

const Text = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#f8f8f8",
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Heading */}
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#333",
                mb: 3,
                fontFamily: "'Roboto Slab', serif",
                letterSpacing: 1.5,
              }}
            >
              ABOUT KABUL ROYAL GUEST HOUSE
            </Typography>
            <Divider
              variant="middle"
              sx={{ mb: 4, borderColor: "#ffa600", width: "50%", mx: "auto" }}
            />
          </Grid>

          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              sx={{
                color: "#555",
                lineHeight: 1.8,
                fontSize: "1.125rem",
                mb: 3,
                fontFamily: "'Roboto', sans-serif",
                textAlign: "justify",
              }}
            >
              Welcome to Kabul Royal Guest House, a haven of comfort and
              hospitality nestled in the heart of Kabul. Established with a
              commitment to offering an unparalleled experience, our guest house
              is located in the city's safest area, providing both convenience
              and peace of mind for our guests.
              <br />
              <br />
              At Kabul Royal Guest House, we pride ourselves on creating a
              welcoming environment that feels like a home away from home. Our
              luxurious accommodations blend traditional Afghan elegance with
              modern amenities to ensure that your stay is as comfortable as it
              is memorable. Whether you’re a business traveler, a tourist, or
              someone seeking a peaceful retreat, our diverse range of rooms,
              including our VIP Room with its added touches of luxury, is
              designed to meet your every need.
              <br />
              <br />
              Beyond just a place to stay, we offer a suite of services tailored
              to make your visit to Kabul effortless and enjoyable. Our
              dedicated staff is always at hand to assist with any requests,
              ensuring that your experience with us is personalized and unique.
              We also provide a spacious conference room, perfect for meetings,
              events, or gatherings, allowing you to conduct your business in a
              professional and comfortable setting.
              <br />
              <br />
              Our commitment to safety, comfort, and exceptional service makes
              Kabul Royal Guest House the perfect choice for your stay in Kabul.
              We look forward to welcoming you and providing an unforgettable
              experience that reflects the rich culture and warmth of Afghan
              hospitality.
            </Typography>
          </Grid>

          {/* Sidebar: Icons representing services */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                py: 2,
              }}
            >
              <Box textAlign="center">
                <Hotel fontSize="large" sx={{ color: "#ffa600", mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Luxurious Rooms
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                  Experience Afghan elegance blended with modern amenities in
                  our diverse range of rooms.
                </Typography>
              </Box>

              <Box textAlign="center">
                <Business fontSize="large" sx={{ color: "#ffa600", mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Conference Room
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                  A professional setting for your meetings and events with full
                  support from our team.
                </Typography>
              </Box>

              <Box textAlign="center">
                <MeetingRoom
                  fontSize="large"
                  sx={{ color: "#ffa600", mb: 1 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  VIP Room
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                  For added luxury and comfort, our VIP Room is equipped with
                  premium amenities.
                </Typography>
              </Box>

              <Box textAlign="center">
                <RoomService
                  fontSize="large"
                  sx={{ color: "#ffa600", mb: 1 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Personalized Services
                </Typography>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>
                  Our staff is always ready to offer personalized services to
                  ensure a memorable stay.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#ffa600",
              color: "white",
              ":hover": { bgcolor: "#ff8a00" },
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Learn More About Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Text;
