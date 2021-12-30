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
import { Social } from "components/footer/Social";
import { FooterNav } from "components/footer/FooterNav";

import { Logo } from "components/ui/Logo.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "110px 0",
    backgroundColor: "#151414",
  },
  gridContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  menu: {
    [theme.breakpoints.down("md")]: {
      marginTop: "30px",
    },
  },
  disclosureTitle: {
    fontWeight: "bold",
    fontSize: "0.8rem",
    color: "#333333",
    marginTop: "35px",
  },
  disclosureText: {
    fontWeight: "bold",
    fontSize: "0.7rem",
    color: theme.palette.secondary.main,
    marginTop: "10px",
    maxWidth: "476px",
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const { footer } = data;
  const { disclosures } = footer;
  const { nav } = footer;
  const { social } = footer;

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={6}>
            <Logo />
            <Box className={classes.disclosure}>
              <Typography variant="h5" className={classes.disclosureTitle}>
                {disclosures.title}
              </Typography>
              <Typography className={classes.disclosureText}>
                {disclosures.text}{" "}
                <Link href="#" color="primary">
                  Read more
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container className={classes.menu}>
              {nav.map((n, i) => (
                <FooterNav title={n.title} links={n.links} key={i} />
              ))}
              <Social title={social.title} media={social.media} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
