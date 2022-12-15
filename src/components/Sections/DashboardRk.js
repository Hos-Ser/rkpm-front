import React from "react";

const DashboardRk = ({ children, style, ...otherProps }) => {
  return (
    <div
      className="flex-column border-start border-dark flex-shrink-0 p-3"
      style={{
        alignContent: "center",
        width: "20%",
        ...style,
        overflow: "auto",
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default DashboardRk;
