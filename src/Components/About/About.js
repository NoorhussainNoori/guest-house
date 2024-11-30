import { Grid } from "@mui/material";
import React from "react";
import Text from "./Text/Text";
import Landing from "../Home/LandingComponent/Landing";
import image1 from "./../../assets/image1.jpeg";
import image2 from "./../../assets/image2.jpeg";
import image3 from "./../../assets/image3.jpeg";
import image4 from "./../../assets/image4.jpeg";

const carouselItems = [
  {
    src: image1,
  },
  {
    src: image3,
  },
  {
    src: image2,
  },
  {
    src: image4,
  },
];

const About = () => {
  return (
    <Grid container>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <Landing items={carouselItems} />
      </Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <Text />
      </Grid>
    </Grid>
  );
};

export default About;
