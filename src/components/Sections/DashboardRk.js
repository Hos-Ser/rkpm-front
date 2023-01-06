import React from "react";

const DashboardRk = ({ className, children, style, ...otherProps }) => {
  return (
    <div
      className={`flex-column border-start rk-border-gray flex-shrink-0 p-3 ${className}`}
      style={{
        alignContent: "center",
        width: "20%",
        overflow: "auto",
        ...style,
      }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default DashboardRk;
