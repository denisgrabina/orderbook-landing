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
    padding: "110px 105px",
    backgroundColor: "#151414",
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
        <Grid container>
          <Grid item sm={6}>
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
          <Grid item sm={6}>
            <Grid container>
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
