import React from "react";

import { DashboardRk, ButtonRk, TextAreaRk, TextInputRk } from "../index";
import "./ModalRk.css";

const ModalRk = ({ setVisible }) => {
  return (
    <>
      <div className="modal-bg" onClick={() => setVisible(false)} />
      <div className="centered">
        <div className="my-modal">
          <DashboardRk
            style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
          >
            <ButtonRk
              className="btn-close mb-2"
              onClick={() => setVisible(false)}
            />
            <TextInputRk />
            <TextAreaRk />
            <ButtonRk color={"success"} style={{ bottom: 0 }}>
              ذخیره
            </ButtonRk>
          </DashboardRk>
        </div>
      </div>
    </>
  );
};

export default ModalRk;
