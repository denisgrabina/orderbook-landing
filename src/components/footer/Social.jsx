import React from "react";
import { makeStyles, Box, Grid, Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#444434",
    fontSize: "18px",
  },
  links: {
    display: "flex",
    marginTop: "10px",
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
    <Grid item sm={4} xs={12}>
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
