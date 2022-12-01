import React from "react";

const ButtonRk = ({ children, color, ...otherParams }) => {
  return (
    <button
      type={"button"}
      className={`btn btn-${color} my-1`}
      {...otherParams}
    >
      {children}
    </button>
  );
};

export default ButtonRk;
