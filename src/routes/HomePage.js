import React from "react";

import { ContentSectionRk, DashboardRk } from "../components";

const HomePage = () => {
  return (
    <>
      <DashboardRk></DashboardRk>
      <ContentSectionRk>
        <div style={{ alignItems: "center" }}>
          <div
            style={{ width: 400, height: 120, backgroundColor: "dodgerblue" }}
          ></div>
        </div>
      </ContentSectionRk>
    </>
  );
};

export default HomePage;
