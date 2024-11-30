import { Box, Container, Typography } from "@mui/material";
import React from "react";

const LandingMessage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          mb: 3,
          fontFamily: "'Roboto', sans-serif",
          letterSpacing: 1.5,
        }}
      >
        KABUL ROYAL GUEST HOUSE
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 4,
          fontFamily: "'Roboto Slab', serif",
          letterSpacing: 1,
          lineHeight: 1.5,
        }}
      >
        Stay At The Best Guest House In Afghanistan
      </Typography>

      {/* Paragraph Text */}
      <Typography
        variant="body1"
        sx={{
          textAlign: "justify",
          fontSize: "1.125rem",
          lineHeight: 1.8,
          mb: 2,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Welcome to Kabul Royal Guest House, your home away from home in the
        heart of Kabul. Nestled in the safest area of the city, our guest house
        offers a serene and secure environment for all our guests. Conveniently
        located, we provide easy access to major attractions and business
        centers.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          textAlign: "justify",
          fontSize: "1.125rem",
          lineHeight: 1.8,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        In addition to our comfortable accommodations, we are proud to offer a
        spacious and well-equipped conference hall, perfect for meetings,
        seminars, and events. With top-notch services and personalized
        attention, we ensure your stay is both productive and memorable. Whether
        you’re visiting for business or leisure, Kabul Royal Guest House is your
        ideal choice for a comfortable and secure stay in Kabul.
      </Typography>
    </Container>
  );
};

export default LandingMessage;
