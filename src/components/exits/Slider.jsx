import React from "react";
import { Project } from "components/ui/Project";
import { EXITS, MOCK } from "constants.js";

const projects = MOCK.projects;

// const useStyles = makeStyles((theme) => ({}));

export const Slider = () => {
  // const classes = useStyles();

  return projects.map((p, i) => <Project type={EXITS} data={p} key={i} />);
};
