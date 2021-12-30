import React from "react";
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
    padding: "85px 75px",
    backgroundColor: theme.palette.secondary.main,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    color: theme.palette.info.main,
  },
  slider: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
}));

export const Exits = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
};
