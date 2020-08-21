import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
// import project1 from "../images/";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

function Portfolio() {
  return (
    <Box>
      <Navbar />
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project1"
                height="140"
                // image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  Lorem Ipsum
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live DEmo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
