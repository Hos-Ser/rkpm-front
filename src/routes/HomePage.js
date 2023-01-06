import React from "react";
import { Link } from "react-router-dom";

import { ContentSectionRk, DashboardRk } from "../components";

const HomePage = () => {
  return (
    <>
      <DashboardRk>
        <Link to={"/buildform"} className="nav-link">
          افرودن فرم
        </Link>
        <Link to={"/buildform"} className="nav-link">
          مدیریت فرم ها
        </Link>
        <Link to={"/buildform"} className="nav-link">
          مدیریت گزارش ها
        </Link>
        <Link to={"/buildform"} className="nav-link">
          مدیریت فرایند ها
        </Link>
        <Link to={"/buildform"} className="nav-link">
          افرودن گزارش
        </Link>
        <Link to={"/buildform"} className="nav-link">
          افرودن فرایند
        </Link>
      </DashboardRk>
      <ContentSectionRk></ContentSectionRk>
    </>
  );
};

export default HomePage;
