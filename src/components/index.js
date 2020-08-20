import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  particlescanva: {
    position: "absolute",
    opacity: "0.9",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlescanva}
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                color: "tomato",
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 2,
                size_min: 0.1,
                sync: true,
              },
            },
            opacity: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </>
  );
};

export default Home;
