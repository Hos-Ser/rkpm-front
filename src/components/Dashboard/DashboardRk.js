import React from "react";

const DashboardRk = ({ children, style, ...otherParams }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{
        position: "relative",
        alignContent: "center",
        backgroundColor: "#e9ecef",
        width: "20%",
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
