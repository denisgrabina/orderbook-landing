import React from "react";
import {
  Container,
  Link,
  makeStyles,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";

const phones = require("assets/images/phones.png");
const rocket = require("assets/images/rocket.png");
const light = require("assets/images/light.png");
const earth = require("assets/images/earth.png");

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    position: "relative",
    paddingBottom: "120px",
    overflow: "hidden",
    "&::after": {
      content: "''",
      display: "block",
      width: "100%",
      height: "115px",
      background: `url(${earth}) no-repeat right/auto`,
      position: "absolute",
      bottom: "0px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "30px",
      "&::after": {
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
    },
  },
  gridContainer: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: "48px",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  textSpaceX: {
    maxWidth: "460px",
  },
  text: {
    maxWidth: "550px",
    marginTop: "20px",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "initial",
    },
  },
  links: {
    display: "flex",
    justifyContent: "start",
    marginTop: "35px",
  },
  buttonLink: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    padding: "20px 70px",
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("md")]: {
      padding: "15px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "300px",
    },
  },
  underlinedLink: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "start",
    alignItems: "center",
    textDecoration: "underline",
    marginLeft: "45px",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  phonesWrapper: {
    position: "relative",

    "&::before": {
      content: "''",
      display: "block",
      width: "1015px",
      height: "1015px",
      background: `url(${light}) no-repeat center/contain`,
      position: "absolute",
      top: "-140px",
      left: "-232px",
      [theme.breakpoints.down("md")]: {
        width: "500px",
        height: "500px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: `inset 0px 0px 20px 30px ${theme.palette.info.main}`,
      },
    },
  },
  phones: {
    position: "relative",
    zIndex: 1,
  },
  img: {
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      height: "275px",
      marginTop: "30px",
    },
  },
  rocket: {
    transform: "translateX(-17%)",
  },
  buttonLinkSpaceX: {
    maxWidth: "240px",
    display: "block",
    padding: "20px 60px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  gridContainerSpaceX: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      paddingTop: "30px",
    },
  },
}));

export const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h2"
                color="secondary"
                className={classes.title}
              >
                Invest in Pre-IPO stocks
              </Typography>
              <Typography color="secondary" className={classes.text}>
                Invest in global companies and buy Pre-IPO shares with no
                limitations of investment amount or your account balance. Enjoy
                investing without a broker!
              </Typography>
              <Box
                display={{ xs: "block", md: "none" }}
                className={classes.phonesWrapper}
              >
                <img
                  src={phones}
                  alt="phones"
                  className={`${classes.img} ${classes.phones}`}
                />
              </Box>
              <Box className={classes.links}>
                <Link
                  href="/offerings"
                  color="inherit"
                  underline="none"
                  className={classes.buttonLink}
                >
                  Explore offerings
                </Link>
                <Link
                  href="#"
                  color="primary"
                  underline="none"
                  className={classes.underlinedLink}
                >
                  Explore successful exits
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display={{ xs: "none", md: "block" }}
              className={classes.phonesWrapper}
            >
              <img
                src={phones}
                alt="phones"
                className={`${classes.img} ${classes.phones}`}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={`${classes.gridContainer} ${classes.gridContainerSpaceX}`}
        >
          <Grid item xs={12} sm={6}>
            <img
              src={rocket}
              alt="rocket"
              className={`${classes.img} ${classes.rocket}`}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h2"
                color="secondary"
                className={classes.title}
                style={{ maxWidth: "465px" }}
              >
                Buy SpaceX shares for as little as $1
              </Typography>
              <Typography
                color="secondary"
                className={`${classes.text} ${classes.textSpaceX}`}
              >
                Benefit from one of the most up-and-coming companies worldwide
                with SpaceX Pre-IPO stock in your wallet. Get tokenized shares,
                watch them increase in value as the SpaceX price grows, and
                receive proceeds when the company goes public.
              </Typography>
              <Link
                href="/projects/spacex"
                color="inherit"
                underline="none"
                className={`${classes.buttonLink} ${classes.buttonLinkSpaceX}`}
                style={{ marginTop: "30px" }}
              >
                Trade SpaceX
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
