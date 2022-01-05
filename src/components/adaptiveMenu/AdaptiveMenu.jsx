import React from "react";
import { Logo } from "components/ui/Logo.jsx";
import { Link, makeStyles, Box, Container } from "@material-ui/core";

const iconTogglerClose = require("assets/images/icon-toggler-close.svg");

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.info.main,
    color: theme.palette.secondary.main,
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    zIndex: "2",
  },
  logo: {
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    opacity: ".1",
    marginTop: "50px",
    marginBottom: "40px",
  },
  link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto 0",
    paddingBottom: "20px",
    maxWidth: "146px",
  },
  auth: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "25px",
  },
  signup: {
    display: "block",
    textAlign: "center",
    margin: "20px auto 0",
    borderRadius: "50px",
    padding: "14px 40px",
    border: `2px solid ${theme.palette.primary.main}`,
    maxWidth: "146px",
  },
  closeBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    marginTop: "25px",
    cursor: "pointer",
    maxWidth: "60px",
    marginLeft: "auto",
  },
  closeText: {
    color: theme.palette.primary.main,
    textTransform: "uppercase",
    fontSize: "10px",
    marginRight: "13px",
  },
  nav: {
    link: {
      borderBottom: "1px solid #333333",
      display: "none",
    }
  },
  login: {
    marginTop: "50px",
  }
}));

export const AdaptiveMenu = ({ toggleMenu, isMenuOpen }) => {
  const classes = useStyles();
  const menuState = isMenuOpen ? "show" : "hide";

  return (
    <Box className={`${menuState} ${classes.root}`}>
      <Container>
        <Box onClick={toggleMenu} className={classes.closeBox}>
          <span className={classes.closeText}>Close</span>
          <img src={iconTogglerClose} alt="icon close" />
        </Box>
      </Container>
      <Container>
        <Box className={classes.logo}>
          <Logo />
        </Box>
        <Box className={classes.nav}>
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
        <Box className={classes.auth}>
          <Link
            href="/auth/login"
            color="primary"
            underline="none"
            className={`${classes.link} ${classes.login}`}
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
      </Container>
    </Box>
  );
};
