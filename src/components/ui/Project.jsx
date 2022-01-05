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
  root: {
    maxWidth: "382px",
    height: "472px",
    margin: "0 auto",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "240px",
    },
  },
  image: {
    height: "270px",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "170px",
    },
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    maxWidth: "358px",
    height: "50px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: "25px",
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      height: "40px",
    },
  },
  text: {
    maxWidth: "358px",
  },
  description: {
    maxHeight: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  endDateText: {
    color: "#A7A7A7",
    marginTop: "10px",
    marginBottom: "0px",
  },
  endDate: {
    marginTop: "0px",
    fontWeight: "600",
  },
  cardContent: {
    marginTop: "10px",
    padding: 0,
  },
  projectValue: {
    fontWeight: "600",
  },
  gridValue: {
    padding: "8px 0",
    borderBottom: "1px solid #E5E5E5",
    "&:last-child": {
      borderBottom: "1px solid transparent",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "70%",
    },
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
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.description}
      >
        {data.description}
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.endDateText}
      >
        End date
      </Typography>
      <Typography
        variant="body2"
        color="textPrimary"
        className={classes.endDate}
      >
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
          <Grid item sm={6} xs={12} className={classes.gridValue}>
            <Typography variant="body2" color="textSecondary" component="p">
              Offering price
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.projectValue}
            >
              $10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.gridValue}>
            <Typography variant="body2" color="textSecondary" component="p">
              Liquidation price
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.projectValue}
            >
              $20
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.gridValue}>
            <Typography variant="body2" color="textSecondary" component="p">
              Return of investment
            </Typography>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.projectValue}
            >
              55%
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );

  return (
    <Card className={classes.root} key={data.id}>
      <CardActionArea href={`projects/${data.link}`}>
        <CardMedia
          component="img"
          alt={data.title}
          height="382"
          image={`${PROD}${data.coverImage}`}
          title={data.title}
          className={`${classes.image} swiper-lazy`}
        />
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        {type === INVESTING ? investingTemplate : exitsTemplate}
      </CardContent>
    </Card>
  );
};
