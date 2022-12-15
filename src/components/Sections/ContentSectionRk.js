import React from "react";

const ContentSectionRk = ({ children, ...otherProps }) => {
  return (
    <div
      className="p-3"
      style={{ overflowY: "clip", overflowX: "auto", width: "100%" }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ContentSectionRk;
