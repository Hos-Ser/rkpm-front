import React from "react";

const ContentSectionRk = ({ children, ...otherParams }) => {
  return (
    <div
      className="p-3"
      style={{ overflowY: "clip", overflowX: "auto", width: "100%" }}
      {...otherParams}
    >
      {children}
    </div>
  );
};

export default ContentSectionRk;
