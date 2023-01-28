import React from "react";
import { Link } from "react-router-dom";

import { ContentSectionRk, DashboardRk, DashbordLiRk } from "../components";

const linksList = [
  { to: "/build-form", label: "افرودن فرم" },
  { to: "/build-process", label: "افرودن فرایند" },
  { to: "/build-report", label: " افرودن گزارش" },
  { to: "/forms", label: "مدیریت فرم ها" },
  { to: "/processes", label: "مدیریت فرایند ها" },
  { to: "/reports", label: "مدیریت گزارش ها" },
];

const HomePage = () => {
  return (
    <>
      <DashboardRk>
        <div style={{ width: "100%" }}>
          {linksList.map((item, index) => {
            return (
              <DashbordLiRk key={index}>
                <Link to={item.to} className="nav-link">
                  {item.label}
                </Link>
              </DashbordLiRk>
            );
          })}
        </div>
      </DashboardRk>
      <ContentSectionRk></ContentSectionRk>
    </>
  );
};

export default HomePage;
