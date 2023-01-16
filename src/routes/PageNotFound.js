// for now im just redirect everything to home page
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>404 Not Found</h1>
        <p style={{ fontWeight: "bolder" }}>صفحه مورد نظر پیدا نشد</p>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Link className="nav-link" style={{ padding: 5 }} to={"/"}>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
