import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <nav className="navbar navbar-expand bg-light" style={{ height: "8vh" }}>
      <div className="container-fluid collapse navbar-collapse">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/createform" className="nav-link">
            Create From
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
