import React from "react";
import { Link } from "react-router-dom";

import { IconRk } from "../components";

const NavHeader = () => {
  return (
    <div className="rk-navheader rk-bc-blue">
      <span>
        <Link
          to="/"
          className="nav-link"
          style={{ width: "fit-content", marginRight: 15 }}
        >
          فرایند ساز رایا کوثر
        </Link>
      </span>
      <Link
        className="nav-link"
        style={{ width: "fit-content" }}
        to={"/profile"}
      >
        <IconRk name={"user"} style={{ width: 30, height: 30, margin: 0 }} />
      </Link>
    </div>
  );
};

export default NavHeader;
