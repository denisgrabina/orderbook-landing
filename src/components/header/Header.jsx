import React from "react";
import { Logo } from "components/ui/Logo.jsx";
import { AdaptiveMenu } from "components/adaptiveMenu/AdaptiveMenu";

import { Container, Link, makeStyles, Box, Grid } from "@material-ui/core";

const iconTogglerOpen = require("assets/images/icon-toggler-open.svg");

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.info.main,
    color: theme.palette.secondary.main,
    padding: "28px 0",
    borderBottom: "1px solid #171718",
    position: "relative",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      padding: "18px 0",
    },
  },
  logo: {
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "147px",
    },
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
  adaptiveMenuToggler: {
    cursor: "pointer",
  },
  hide: {
    display: "none",
  },
  show: {
    display: "block",
  },
}));

export const Header = ({ toggleMenu, isMenuOpen }) => {
  const classes = useStyles();
  const menuState = isMenuOpen ? "show" : "hide";

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
          <Box className={classes.nav} display={{ xs: "none", md: "block" }}>
            <Link
              href="/offerings"
              color="inherit"
              underline="none"
              className={classes.link}
            >
              Offerings
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
          <Box className={classes.auth} display={{ xs: "none", md: "block" }}>
            <Link
              href="/auth/login"
              color="primary"
              underline="none"
              className={classes.link}
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              color="primary"
              underline="none"
              className={classes.signup}
            >
              Sign up
            </Link>
          </Box>

          <Box
            className={classes.adaptiveMenuToggler}
            display={{ xs: "block", md: "none" }}
            onClick={toggleMenu}
          >
            <img src={iconTogglerOpen} alt="icon open" />
          </Box>
          <Box className={menuState}>
            <AdaptiveMenu toggleMenu={toggleMenu} />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
