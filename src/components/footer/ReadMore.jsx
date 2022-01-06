import React, { useState } from "react";
import {
  ReadMoreText,
  ReadMoreTextExtra,
} from "components/footer/ReadMoreText";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  readMore: {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    padding: "0",
  },
}));

export const ReadMore = ({ footerRef }) => {
  const classes = useStyles();
  const [isCollapsed, ToggleIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    ToggleIsCollapsed(!isCollapsed);
    setTimeout(() => {
      footerRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }, 1);
  };

  const renderedText = isCollapsed ? <ReadMoreText /> : <ReadMoreTextExtra />;
  return (
    <Box>
      {renderedText}{" "}
      <button className={classes.readMore} onClick={toggleCollapse}>
        {isCollapsed ? "Show More" : "Show Less"}
      </button>
    </Box>
  );
};
