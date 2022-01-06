import React, { useRef, forwardRef } from "react";
import { data } from "assets/data/data";
import {
  Container,
  makeStyles,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { Social } from "components/footer/Social";
import { FooterNav } from "components/footer/FooterNav";
import { ReadMore } from "components/footer/ReadMore";

import { Logo } from "components/ui/Logo.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "110px 0",
    backgroundColor: "#151414",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0 45px",
    },
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  menu: {
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
      justifyContent: "space-between",
    },
  },
  disclosureTitle: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    color: "#7A7A7A",
    marginTop: "35px",
  },
  disclosureText: {
    fontWeight: "bold",
    fontSize: "0.7rem",
    color: theme.palette.secondary.main,
    marginTop: "10px",
    maxWidth: "476px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "initial",
    },
  },
  media: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "15px",
    },
  },
  logo: {
    display: "flex",
  },
  readMore: {
    backgroundColor: "transparent",
  },
}));

export const Footer = forwardRef(() => {
  const classes = useStyles();
  const footerRef = useRef();

  const { footer } = data;
  const { disclosures } = footer;
  const { nav } = footer;
  const { social } = footer;

  return (
    <Box className={classes.root} ref={footerRef}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={12} lg={6}>
            <Box className={classes.logo}>
              <Logo />
            </Box>
            <Box display={{ xs: "none", md: "block" }}>
              <Typography variant="h5" className={classes.disclosureTitle}>
                {disclosures.title}
              </Typography>
              <Box className={classes.disclosureText}>
                <ReadMore footerRef={footerRef} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Grid container className={classes.menu} wrap="wrap">
              {nav.map((n, i) => (
                <FooterNav title={n.title} links={n.links} key={i} />
              ))}
              <Box className={classes.media}>
                <Social title={social.title} media={social.media} />
              </Box>
              <Box display={{ xs: "block", md: "none" }}>
                <Typography variant="h5" className={classes.disclosureTitle}>
                  {disclosures.title}
                </Typography>
                <Box className={classes.disclosureText}>
                  <ReadMore footerRef={footerRef} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});
