import React from "react";

const ButtonRk = ({
  icon,
  className,
  children,
  color,
  type,
  ...otherProps
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={`btn my-1 border-dark bg-white ${className}`}
      {...otherProps}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};

export default ButtonRk;
