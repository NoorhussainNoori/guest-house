import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const TopBar = ({ userName }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ffa600", zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap component="div">
          Kabul Royal Guest House
        </Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
