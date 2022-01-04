import React from "react";
import { Link } from "@material-ui/core";

const logo = require("assets/images/logo.png");

export const Logo = () => {
  return (
    <Link href="/offerings">
      <img src={logo} alt="Logo" />
    </Link>
  );
};
