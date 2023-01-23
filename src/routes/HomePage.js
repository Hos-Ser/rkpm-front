import React from "react";
import { Link } from "react-router-dom";

import { ContentSectionRk, DashboardRk } from "../components";

const HomePage = () => {
  return (
    <>
      <DashboardRk>
        <Link to={"/build-form"} className="nav-link">
          افرودن فرم
        </Link>
        <Link to={"/build-report"} className="nav-link">
          افرودن گزارش
        </Link>
        <Link to={"/build-process"} className="nav-link">
          افرودن فرایند
        </Link>
        <Link to={"/forms"} className="nav-link">
          مدیریت فرم ها
        </Link>
        <Link to={"/reports"} className="nav-link">
          مدیریت گزارش ها
        </Link>
        <Link to={"/processes"} className="nav-link">
          مدیریت فرایند ها
        </Link>
      </DashboardRk>
      <ContentSectionRk></ContentSectionRk>
    </>
  );
};

export default HomePage;
