import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Map = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={6}>
        {/* Location Heading */}
        <Grid item xs={12}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontFamily: "'Roboto Slab', serif",
              letterSpacing: 1.5,
            }}
          >
            Our Location
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: "1.125rem",
              fontFamily: "'Roboto', sans-serif",
              lineHeight: 1.8,
              color: "text.secondary",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Easily find us at Kabul Royal Guest House, conveniently located in
            the heart of Kabul. We are situated in one of the safest areas,
            offering quick access to the city’s main attractions.
          </Typography>
        </Grid>

        {/* Google Map */}
        <Grid item xs={12}>
          <Box mt={4} boxShadow={3} borderRadius={2} overflow="hidden">
            <iframe
              title="Kabul Royal Guest House Location"
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=34%C2%B032'05.1%22N%2069%C2%B010'24.8%22E+(Kabul%20Royal%20Guest%20House)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Map;
