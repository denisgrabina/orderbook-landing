import React, { forwardRef } from "react";
import {
  Container,
  makeStyles,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { Slider } from "components/exits/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "85px 0 45px",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: {
      padding: "60px 0 45px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0 0",
    },
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
  },
  mainTitle: {
    fontWeight: "bold",
    color: theme.palette.info.main,
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  slider: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
    [theme.breakpoints.up("md")]: {
      position: "static",
    },
  },
}));

export const Exits = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} ref={ref}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="secondary"
          className={classes.mainTitle}
        >
          Successful exits
        </Typography>
      </Container>
      <Grid item className={classes.slider}>
        <Slider />
      </Grid>
    </Box>
  );
});
