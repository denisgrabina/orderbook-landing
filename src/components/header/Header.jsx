import React from "react";
import { Logo } from "components/ui/Logo.jsx";
import {
  Container,
  Link,
  makeStyles,
  Box,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.info.main,
    color: theme.palette.secondary.main,
    padding: "28px 0",
    borderBottom: "1px solid #171718",
    position: "relative",
    zIndex: "2",
  },
  logo: {
    flexGrow: "1",
  },
  link: {
    marginRight: "45px",
  },
  auth: {
    marginLeft: "35px",
  },
  signup: {
    borderRadius: "50px",
    padding: "14px 40px",
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

export const Header = () => {
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
          <Box className={classes.logo}>
            <Logo />
          </Box>
          <Box className={classes.nav} display={{ xs: 'none', md: 'block' }}>
            <Link
              href="#"
              color="inherit"
              underline="none"
              className={classes.link}
            >
              Offering
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              className={classes.link}
            >
              Blog
            </Link>
          </Box>
          <Box className={classes.auth} display={{ xs: 'none', md: 'block' }}>
            <Link
              href="#"
              color="primary"
              underline="none"
              className={classes.link}
            >
              Login
            </Link>
            <Link
              href="#"
              color="primary"
              underline="none"
              className={classes.signup}
            >
              Signup
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
