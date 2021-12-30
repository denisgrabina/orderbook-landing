import React from "react";
import { data } from "assets/data/data";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  accordion: {
    backgroundColor: "transparent",
    borderBottom: "1px solid #333333",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.secondary.main,
  },
}));

export const AccordionBlock = () => {
  const classes = useStyles();
  const { accordion } = data.stocks;

  return (
    <Box>
      {accordion.map((a, id) => (
        <Accordion key={id} className={classes.accordion} square={false}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon color="primary" />}
            aria-controls={`panel-${id}-content`}
            id={`panel-${id}-header`}
          >
            <Typography className={classes.heading}>{a.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.text}>{a.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
