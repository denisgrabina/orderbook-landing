import React from "react";
import { makeStyles, Box, Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#7A7A7A",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  },
  link: {
    marginBottom: "7px",
  },
}));

export const FooterNav = ({ title, links }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={6} md={4}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.links}>
        {links.map((l, i) => (
          <Link
            href={l.href}
            key={i}
            underline="none"
            className={classes.link}
            color="secondary"
          >
            {l.text}
          </Link>
        ))}
      </Box>
    </Grid>
  );
};
