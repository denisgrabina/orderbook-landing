import React from "react";
import { data } from "assets/data/data";
import {
  Container,
  makeStyles,
  Box,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import { AccordionBlock } from "components/stocks/AccordionBlock";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "70px 0",
    backgroundColor: theme.palette.info.main,
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
    },
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  content: {
    marginTop: "75px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
    },
  },
  buttonLink: {
    display: "block",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: "240px",
    padding: "20px 60px",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageStub: {
    backgroundColor: "#434343",
    maxWidth: "674px",
    width: "100%",
    height: "308px",
    borderRadius: "20px",
    marginLeft: "auto",
    marginRight: "0",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      maxWidth: "initial",
    },
  },
  gridItem: {
    alignSelf: "start",
  },
}));

export const Stocks = () => {
  const classes = useStyles();
  const { stocks } = data;

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="secondary"
          className={classes.mainTitle}
        >
          {stocks.mainTitle}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.content}
        >
          <Grid item xs={12} sm={12} md={3}>
            <AccordionBlock />
            <Link
              href="/offerings"
              color="inherit"
              underline="none"
              className={`${classes.buttonLink}`}
            >
              Start Trading
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={7} className={classes.gridItem}>
            <Box className={classes.imageStub}></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
