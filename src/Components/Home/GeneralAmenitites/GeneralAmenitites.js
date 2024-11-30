import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  IconButton,
  Button,
  Collapse,
} from "@mui/material";
import {
  Wifi,
  LocalParking,
  RoomService,
  BreakfastDining,
  LocalLaundryService,
  AcUnit,
  LocationOn,
  Phone,
  Email,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import logo from "./../../../assets/logo.jpeg"; // Replace with the actual path to your logo

const GeneralAmenities = () => {
  const [showContact, setShowContact] = useState(false);

  const handleContactToggle = () => {
    setShowContact(!showContact);
  };

  return (
    <Box component="section" sx={{ bgcolor: "#f8f8f8", py: 8 }}>
      <Container>
        {/* General Amenities Section */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
          }}
        >
          General Amenities
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Amenity 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <RoomService fontSize="large" sx={{ color: "#ffa600", mr: 2 }} />
              <Typography variant="h6">24 Hour Room Service</Typography>
            </Box>
          </Grid>
          {/* Amenity 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <Wifi fontSize="large" sx={{ color: "#ffa600", mr: 2 }} />
              <Typography variant="h6">Free Wifi</Typography>
            </Box>
          </Grid>
          {/* Amenity 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <LocalParking fontSize="large" sx={{ color: "#ffa600", mr: 2 }} />
              <Typography variant="h6">Free Parking</Typography>
            </Box>
          </Grid>
          {/* Amenity 4 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <BreakfastDining
                fontSize="large"
                sx={{ color: "#ffa600", mr: 2 }}
              />
              <Typography variant="h6">Free Breakfast</Typography>
            </Box>
          </Grid>
          {/* Amenity 5 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <LocalLaundryService
                fontSize="large"
                sx={{ color: "#ffa600", mr: 2 }}
              />
              <Typography variant="h6">Free Toiletries</Typography>
            </Box>
          </Grid>
          {/* Amenity 6 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <AcUnit fontSize="large" sx={{ color: "#ffa600", mr: 2 }} />
              <Typography variant="h6">Air Condition</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Section */}
        <Box mt={8} textAlign="center">
          <Button
            onClick={handleContactToggle}
            startIcon={showContact ? <ExpandLess /> : <ExpandMore />}
            variant="contained"
            sx={{
              backgroundColor: "#ffa600",
              ":hover": { backgroundColor: "#ff8a00" },
            }}
          >
            {showContact ? "Hide Contact Details" : "Show Contact Details"}
          </Button>

          {/* Contact Details */}
          <Collapse in={showContact} timeout="auto" unmountOnExit>
            <Box
              mt={4}
              p={4}
              bgcolor="white"
              boxShadow={3}
              borderRadius={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              maxWidth="600px"
              mx="auto"
            >
              <Box
                component="img"
                src={logo}
                alt="Kabul Royal Guest House Logo"
                width={100}
                height={80}
                mb={3}
              />
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Kabul Royal Guest House
              </Typography>
              <Typography variant="body1">
                Shahre-Naow Behind Majid Mall
                <br />
                Kabul, Afghanistan
              </Typography>
              <Typography variant="body1" gutterBottom>
                T: +93 76 4175307
              </Typography>
              <Box mt={2}>
                {/* Email Icon */}
                <IconButton
                  href="mailto:info@kabulroyalguesthouse.com"
                  sx={{
                    color: "#ffa600",
                    mr: 2,
                    ":hover": { color: "#ff8a00" },
                  }}
                >
                  <Email fontSize="large" />
                </IconButton>
                {/* Phone Icon */}
                <IconButton
                  href="tel:+93764175307"
                  sx={{
                    color: "#ffa600",
                    ":hover": { color: "#ff8a00" },
                  }}
                >
                  <Phone fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          </Collapse>
        </Box>
      </Container>
    </Box>
  );
};

export default GeneralAmenities;
