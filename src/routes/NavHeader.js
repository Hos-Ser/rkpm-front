import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav
      className="navbar navbar-expand "
      style={{ height: "8vh", backgroundColor: "#e9ecef" }}
    >
      <div className="container-fluid collapse navbar-collapse">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            فرایند ساز رایا کوثر
          </Link>
          <Link to="/buildform" className="nav-link">
            Build From
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
