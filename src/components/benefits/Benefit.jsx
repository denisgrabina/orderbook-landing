import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    display: "flex",
    marginBottom: "20px",
  },
  text: {
    maxWidth: "210px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "initial",
    },
  },
  title: {
    marginLeft: "12px",
  },
}));

export const Benefit = ({ img, title, text }) => {
  const classes = useStyles();
  const { src, alt } = img;

  return (
    <>
      <Box className={classes.heading}>
        <img src={src} alt={alt} />
        <h3 className={classes.title}>{title}</h3>
      </Box>
      <p className={classes.text}>{text}</p>
    </>
  );
};
