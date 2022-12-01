import React from "react";

import { DashboardRk, ButtonRk } from "../index";
import "./ModalRk.css";

const ModalRk = ({ setVisible }) => {
  return (
    <>
      <div className="modal-bg" onClick={() => setVisible(false)} />
      <div className="centered">
        <div className="my-modal" style={{}}>
          <DashboardRk
            style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
          >
            <ButtonRk className="btn-close" onClick={() => setVisible(false)} />
            <ButtonRk color={"success"} style={{}}></ButtonRk>
          </DashboardRk>
        </div>
      </div>
    </>
  );
};

export default ModalRk;
