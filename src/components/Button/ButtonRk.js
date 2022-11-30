import React from "react";

const ButtonRk = ({ children, color, ...otherParams }) => {
  return (
    <button
      type={"button"}
      className={`btn btn-${color}`}
      style={{ width: "100%" }}
      {...otherParams}
    >
      {children}
    </button>
  );
};

export default ButtonRk;
