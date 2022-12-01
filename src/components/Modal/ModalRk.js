import React from "react";

import { DashboardRk, ButtonRk } from "../index";
import "./ModalRk.css";

const ModalRk = ({ setIsOpen }) => {
  return (
    <>
      <div className="modal-bg" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="my-modal">
          <DashboardRk
            style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
          >
            <></>
            <ButtonRk
              className="btn-close"
              style={{}}
              onClick={() => setIsOpen(false)}
            ></ButtonRk>
          </DashboardRk>
        </div>
      </div>
    </>
  );
};

export default ModalRk;
