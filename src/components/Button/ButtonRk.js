import React from "react";

const ButtonRk = ({ children, color, ...otherParams }) => {
  return (
    <button className={`btn btn-${color}`} {...otherParams}>
      {children}
    </button>
  );
};

export default ButtonRk;
