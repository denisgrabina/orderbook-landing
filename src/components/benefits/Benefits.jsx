import React from "react";
import { Benefit } from "components/benefits/Benefit";
import { Container, makeStyles, Box, Grid } from "@material-ui/core";
import { data } from "assets/data/data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0",
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
          alignItems="center"
        >
          <Grid item sm={3}>
            <h2>{benefits.mainTitle}</h2>
          </Grid>
          {benefit.map((b, i) => (
            <Grid item sm={3} key={i}>
              <Benefit img={b.img} title={b.title} text={b.text} key={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
