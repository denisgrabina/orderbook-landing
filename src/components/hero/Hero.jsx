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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.main,
    height: "100vh",
    backgroundAttachment: "scroll",
    overflow: "auto",
    // paddingBottom: "30px",
  },
  subTitle: {
    fontWeight: "600",
    fontSize: "3rem",
  },
  text: {
    maxWidth: "550px",
    marginTop: "20px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    marginTop: "35px",
  },
  buttonLink: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    padding: "20px 70px",
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: "bold",
    textAlign: "center",
  },
  underlinedLink: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "underline",
  },
  img: {
    margin: "auto",
  },
  rocket: {
    transform: "translateX(-17%)",
  },
  buttonLinkSpaceX: {
    maxWidth: "240px",
    display: "block",
    padding: "20px 60px",
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
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                variant="h2"
                color="secondary"
                className={classes.subTitle}
              >
                Invest in Pre-IPO stocks
              </Typography>
              <Typography color="secondary" className={classes.text}>
                Invest in global companies and buy Pre-IPO shares with no
                limitations of investment amount or your account balance. Enjoy
                investing without a broker!
              </Typography>
              <Box className={classes.links}>
                <Link
                  href="#"
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
          <Grid item xs={12} sm={6}>
            <img src={phones} alt="phones" className={classes.img} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <img
              src={rocket}
              alt="rocket"
              className={`${classes.img} ${classes.rocket}`}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography
                variant="h2"
                color="secondary"
                className={classes.subTitle}
              >
                Buy SpaceX shares for as little as $1
              </Typography>
              <Typography
                color="secondary"
                className={classes.text}
                style={{ maxWidth: "440px" }}
              >
                Benefit from one of the most up-and-coming companies worldwide
                with SpaceX Pre-IPO stock in your wallet. Get tokenized shares,
                watch them increase in value as the SpaceX price grows, and
                receive proceeds when the company goes public.
              </Typography>
              <Link
                href="#"
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
