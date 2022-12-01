import React from "react";

const DashboardRk = ({ children, width = "20%", style, ...otherParams }) => {
  return (
    <div
      className="d-grid flex-column flex-shrink-0 p-3"
      style={{
        backgroundColor: "#e9ecef",
        width: width,
        ...style,
        overflow: "auto",
      }}
      {...otherParams}
    >
      {children}
    </div>
  );
};

export default DashboardRk;
