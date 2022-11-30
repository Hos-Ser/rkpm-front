import React from "react";

const DashboardRk = ({ children, width = "20%" }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: width }}
    >
      <div className="nav nav-pills flex-column mb-auto">{children}</div>
    </div>
  );
};

export default DashboardRk;
