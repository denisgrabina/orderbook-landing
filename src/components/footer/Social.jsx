import React from "react";
import { makeStyles, Box, Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      marginTop: "15px",
    },
  },
  title: {
    color: "#7A7A7A",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      marginRight: "15px",
    },
  },
  links: {
    display: "flex",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  },
  link: {
    marginRight: "15px",
  },
  media: {
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    width: "24px",
    height: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Social = ({ title, media }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={4} className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.links}>
        {media.map((m, i) => (
          <Link
            href={m.href}
            key={i}
            underline="none"
            className={classes.link}
            color="secondary"
          >
            <Box className={classes.media}>
              <img src={m.src} alt={m.alt} />
            </Box>
          </Link>
        ))}
      </Box>
    </Grid>
  );
};
