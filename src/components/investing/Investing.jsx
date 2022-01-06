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
    paddingBottom: "100px",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: "0",
      position: "relative",
    }
  },
  mainTitle: {
    fontWeight: "bold",
    color: theme.palette.info.main,
    fontSize: "40px",
    [theme.breakpoints.down('md')]: {
      fontSize: "30px",
    }
  },
  link: { 
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    margin: "0 auto",
    [theme.breakpoints.down('sm')]: {
      position: "absolute",
      bottom: "30px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
    },
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
            href="/offerings"
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
