import React from "react";

import "./Sections.css";

const DashboardRk = ({
  className,
  children,
  header,
  footer,
  style,
  ...otherProps
}) => {
  return (
    <div
      className={`flex-column border-start rk-border-gray flex-shrink-0 dashboard-rk ${className}`}
      style={style}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default DashboardRk;
