import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Landing from "./LandingComponent/Landing";
import Map from "./Map/Map";
import GeneralAmenities from "./GeneralAmenitites/GeneralAmenitites";
import image1 from "./../../assets/image1.jpeg";
import image2 from "./../../assets/image2.jpeg";
import image3 from "./../../assets/image3.jpeg";
import LandingMessage from "./LandingComponent/LandingMessage";

const carouselItems = [
  {
    src: image1,
    title: "Welcome to Kabul Royal Guest House",
    subtitle: "Experience luxury and comfort",
    buttonText: "Book Now",
  },
  {
    src: image3,
    title: "Luxurious Rooms",
    subtitle: "Unwind in style and comfort",
    buttonText: "Explore Menu",
  },
  {
    src: image2,
    title: "Fine Dining",
    subtitle: "Savor exquisite culinary delights",
    buttonText: "View Rooms",
  },
];

const Home = () => {
  return (
    <Grid container display={"flex"} alignItems={"center"} spacing={2}>
      <Grid item xs={12} md={12}>
        <Landing items={carouselItems} />
      </Grid>
      <Grid item xs={12} md={12}>
        {/* Landing Message Section: Always displayed */}
        <Box
          sx={{
            mt: 5,
            mb: 5,
            px: { xs: 2, sm: 4, md: 8 },
            bgcolor: "#f8f8f8",
            py: 8,
          }}
        >
          <LandingMessage />
        </Box>
      </Grid>

      <Grid item xs={12} md={12} mb={5}>
        <Map />
      </Grid>
      <Grid item xs={12} md={12} mb={5}>
        <GeneralAmenities />
      </Grid>
    </Grid>
  );
};

export default Home;
