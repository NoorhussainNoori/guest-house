import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import LandingMessage from "./LandingMessage";

const Landing = ({ items }) => {
  return (
    <Box component="main" flexGrow={1}>
      {/* Carousel Section: Only show if items prop is passed and has content */}
      {items && items.length > 0 && (
        <Carousel>
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{ position: "relative", height: { xs: 400, md: 700 } }}
            >
              {item.src && (
                <Box component={'img'}
                  src={`${item.src}?height=500&width=1000`}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  color: "white",
                  p: { xs: 2, sm: 4 },
                }}
              >
                <Box>
                  {item.title && (
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        mb: 2,
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                      }}
                    >
                      {item.title}
                    </Typography>
                  )}
                  {item.subtitle && (
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 4,
                        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  )}
                  {item.buttonText && (
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        borderColor: "white",
                        ":hover": { bgcolor: "white", color: "black" },
                        px: { xs: 2, sm: 4 },
                        py: { xs: 1, sm: 1.5 },
                        fontSize: { xs: "0.75rem", sm: "1rem" },
                      }}
                    >
                      {item.buttonText}
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
};

export default Landing;
