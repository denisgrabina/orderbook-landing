import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { PROD, INVESTING } from "constants.js";

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "383px",
  },
  title: {
    fontSize: "1.5rem",
    maxWidth: "358px",
  },
  text: {
    maxWidth: "358px",
  },
  endDateText: {
    color: "#A7A7A7",
    marginBottom: "0px",
  },
  endDate: {
    marginTop: "0px",
  },
}));

export const Project = ({ type, data }) => {
  const classes = useStyles();

  const investingTemplate = (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="h4"
        className={classes.title}
      >
        {data.title}
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.description}>
        {data.description}
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.endDateText}>
        End date
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.endDate}>
        {data.endDate}
      </Typography>
    </>
  );

  const exitsTemplate = (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="h4"
        className={classes.title}
      >
        {data.title}
      </Typography>
      <Box>
        <Grid container className={classes.projectValues}>
          <Grid item sm={6} xs={12} className={classes.projectValue}>
            <Typography variant="body2" color="textSecondary" component="p">
              Offering price
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              $10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.projectValue}>
            <Typography variant="body2" color="textSecondary" component="p">
              Liquidation price
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              $20
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body2" color="textSecondary" component="p">
              Return of investment
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              55%
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );

  return (
    <Card className={classes.root} key={data.id}>
      <CardActionArea href={data.link}>
        <CardMedia
          component="img"
          alt={data.title}
          height="382"
          image={`${PROD}${data.coverImage}`}
          title={data.title}
          className={classes.image}
        />
      </CardActionArea>
      <CardContent>
        {type === INVESTING ? investingTemplate : exitsTemplate}
      </CardContent>
    </Card>
  );
};
