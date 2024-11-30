import React from "react";
import { Outlet, useLocation } from "react-router-dom"; // Import useLocation to get current route
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Components/Layout/Footer/Footer";
import "@fontsource/poppins";
import Navbar from "./Components/Layout/Nav/Navbar";
import { AuthProvider } from "./Components/Contexts/authContext/authContext";

const App = () => {
  const location = useLocation(); // Get the current location (route)

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      h3: {
        color: "darkred",
      },
    },
  });

  // Conditionally hide the Navbar and Footer if on the Dashboard
  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* Only show the Navbar if not on Dashboard */}
        {!isDashboardRoute && <Navbar />}

        <Box>
          <Outlet />
        </Box>

        {/* Only show the Footer if not on Dashboard */}
        {!isDashboardRoute && <Footer />}
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
