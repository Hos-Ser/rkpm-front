import React from "react";

import { IconRk } from "../index";

const DashbordLiRk = ({
  containerStyle,
  icon = null,
  onClick,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={`rk-border-gray dashboard-container ${
        icon ? "double" : "single"
      }-column`}
      style={containerStyle}
      onClick={onClick}
    >
      {icon ? <IconRk name={icon} /> : null}
      <span {...otherProps}>{children}</span>
    </div>
  );
};

export default DashbordLiRk;
