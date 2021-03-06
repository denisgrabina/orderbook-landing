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
      bottom: "0",
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
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  buttonLinkSpaceX: {
    maxWidth: "240px",
    display: "block",
    padding: "20px 60px",
  },
  gridContainerSpaceX: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      paddingTop: "30px",
    },
  },
  buttonLinkBox: {
    position: "relative",
    zIndex: "1",
    marginTop: "25px",
    maxWidth: "300px",
    [theme.breakpoints.up("md")]: {
      marginRight: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  buttonLink: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: "bold",
    color: theme.palette.info.main,
    textAlign: "center",
    padding: "20px 50px",
    display: "block",
    [theme.breakpoints.down("md")]: {
      padding: "15px 50px",
      width: "100%",
      maxWidth: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  underlinedLinkBox: {
    position: "relative",
    zIndex: "1",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "start",
    },
  },
  underlinedLink: {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    textDecoration: "underline",
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
}));

export const Hero = ({ scrollToSection }) => {
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
                <Box className={classes.buttonLinkBox}>
                  <Link
                    href="/offerings"
                    color="inherit"
                    underline="none"
                    className={classes.buttonLink}
                  >
                    Explore offerings
                  </Link>
                </Box>
                <Box
                  className={classes.underlinedLinkBox}
                  display={{ xs: "none", md: "flex" }}
                >
                  <button
                    className={classes.underlinedLink}
                    onClick={scrollToSection}
                  >
                    Explore successful exits
                  </button>
                </Box>
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
              <Box
                display={{ xs: "none", md: "block" }}
                className={classes.buttonLinkBox}
              >
                <Link
                  href="/projects/spacex"
                  color="inherit"
                  underline="none"
                  className={`${classes.buttonLink} ${classes.buttonLinkSpaceX}`}
                >
                  Trade SpaceX
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
