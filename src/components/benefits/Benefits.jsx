import React from "react";
import { Benefit } from "components/benefits/Benefit";
import { Container, makeStyles, Box, Grid } from "@material-ui/core";
import { data } from "assets/data/data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
    [theme.breakpoints.down("md")]: {
      padding: "50px 0",
    }, 
  },
  mainTitle: {
    fontSize: "40px",
    marginTop: "0",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
    },
  },
  gridItem: {
    alignSelf: "start",
  },
  gridContainer: {
    alignItems: "start",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "start",
    },
  },
}));

export const Benefits = () => {
  const { benefits } = data;
  const { benefit } = benefits;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={2}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} md={3} className={classes.gridItem}>
            <h2 className={classes.mainTitle}>{benefits.mainTitle}</h2>
          </Grid>
          {benefit.map((b, i) => (
            <Grid item xs={12} sm={4} md={3} key={i}>
              <Benefit img={b.img} title={b.title} text={b.text} key={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
