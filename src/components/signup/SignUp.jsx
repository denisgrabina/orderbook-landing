import React from "react";
import { data } from "assets/data/data";
import {
  Container,
  makeStyles,
  Box,
  Typography,
  Link,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "110px 105px",
    backgroundColor: theme.palette.info.main,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: "2.5rem",
  },
  text: {
    maxWidth: "600px",
    marginTop: "20px",
  },
  buttonLink: {
    display: "flex",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    border: `2px solid ${theme.palette.primary.main}`,
    fontWeight: "bold",
    textAlign: "center",
    maxWidth: "240px",
    padding: "20px 60px",
    marginTop: "60px",
  },
}));

export const SignUp = () => {
  const classes = useStyles();
  const { signup } = data;

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          color="secondary"
          className={classes.mainTitle}
        >
          {signup.mainTitle}
        </Typography>
        <Typography color="secondary" className={classes.text}>
          {signup.text}
        </Typography>
        <Link
          href="#"
          color="inherit"
          underline="none"
          className={`${classes.buttonLink}`}
        >
          {signup.buttonText}
        </Link>
      </Container>
    </Box>
  );
};
