import React from "react";

const DashboardRk = ({ children, width = "20%", style, ...otherParams }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3"
      style={{ backgroundColor: "#00000009", width: width, ...style }}
      {...otherParams}
    >
      <ul
        className="align-items-center align-content-center flex-column mb-auto"
        style={{
          listStyle: "none",
          padding: 0,
          borderRadius: 16,
        }}
      >
        {children.map((child, index) => {
          return (
            <li className="pt-2" key={index}>
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DashboardRk;
