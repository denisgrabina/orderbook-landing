import React from "react";
import { Logo } from "components/ui/Logo.jsx";
import {
  AppBar,
  Container,
  Toolbar,
  Link,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: "1",
  },
  header: {
    background: theme.palette.info.main,
    color: theme.palette.secondary.main,
    padding: "28px 0",
    borderBottom: "1px solid #171718",
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
    <AppBar position="static" className={classes.header}>
      <Container fixed>
        <Toolbar>
          <Box className={classes.logo}>
            <Logo />
          </Box>
          <Box className={classes.nav}>
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
          <Box className={classes.auth}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
