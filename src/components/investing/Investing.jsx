import React from "react";
import {
  Container,
  makeStyles,
  Box,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import { Slider } from "components/investing/Slider";

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
  link: {
    display: "flex",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  slider: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
}));

export const Investing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h2"
            color="secondary"
            className={classes.mainTitle}
          >
            Choose a project for Pre-IPO investing
          </Typography>
          <Link
            href="#"
            color="primary"
            underline="none"
            className={classes.link}
          >
            View all
          </Link>
        </Grid>
      </Container>
      <Grid item className={classes.slider}>
        <Slider />
      </Grid>
    </Box>
  );
};
