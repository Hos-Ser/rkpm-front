import React from "react";

const ButtonRk = ({
  icon = null,
  className,
  children,
  color,
  type = "button",
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={`btn my-1 border-dark bg-white ${className}`}
      {...otherProps}
    >
      {icon}
      {children}
    </button>
  );
};

export default ButtonRk;
