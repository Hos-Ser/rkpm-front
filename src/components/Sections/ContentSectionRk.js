import React from "react";

const ContentSectionRk = ({ style, children, ...otherProps }) => {
  return (
    <div
      className="p-3"
      style={{ overflowX: "clip", overflowY: "auto", width: "100%", ...style }}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default ContentSectionRk;
