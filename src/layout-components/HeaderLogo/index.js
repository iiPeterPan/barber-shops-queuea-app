import React, { Fragment } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { IconButton, Box } from "@material-ui/core";

import projectLogo from "../../assets/images/react.svg";

const HeaderLogo = (props) => {
  return (
    <Fragment>
      <div className={clsx("app-header-logo", {})}>
        <Box
          className="header-logo-wrapper"
          title="Carolina React Admin Dashboard with Material-UI Free"
        >
          <img
            width="70"
            height="70"
            //className="app-header-logo-img"
            alt="Carolina React Admin Dashboard with Material-UI Free"
            src="logo-barber-modified.png"
          />
          <Box className="header-logo-text">UnionMade Barbershop</Box>
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
