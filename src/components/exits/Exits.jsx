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
    paddingBottom: "100px",
    paddingTop: "100px",
    backgroundColor: theme.palette.secondary.main,
  },
  mainTitle: {
    fontWeight: "bold",
    color: theme.palette.info.main,
    fontSize: "40px",
    [theme.breakpoints.down('md')]: {
      fontSize: "30px",
    }
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
