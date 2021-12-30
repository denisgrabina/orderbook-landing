import React from "react";
import { data } from "assets/data/data";
import {
  Container,
  makeStyles,
  Box,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import { AccordionBlock } from "components/stocks/AccordionBlock";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "70px 90px",
    backgroundColor: theme.palette.info.main,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: "2.5rem",
  },
  content: {
    marginTop: "75px",
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
  imageStub: {
    backgroundColor: "#434343",
    maxWidth: "674px",
    width: "100%",
    height: "308px",
    borderRadius: "20px",
  },
}));

export const Stocks = () => {
  const classes = useStyles();
  const { stocks } = data;

  return (
    <Box className={classes.root}>
      <Container>
        <Typography
          variant="h2"
          align="center"
          color="secondary"
          className={classes.mainTitle}
        >
          {stocks.mainTitle}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={classes.content}
        >
          <Grid item sm={3}>
            <AccordionBlock />
            <Link
              href="#"
              color="inherit"
              underline="none"
              className={`${classes.buttonLink}`}
            >
              Start Trading
            </Link>
          </Grid>
          <Grid item sm={7}>
            <Box className={classes.imageStub}></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
