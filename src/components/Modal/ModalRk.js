import React from "react";
import { useImmer } from "use-immer";

import {
  DashboardRk,
  ButtonRk,
  TextAreaRk,
  TextInputRk,
  ContentSectionRk,
} from "../index";
import "./ModalRk.css";

const ModalRk = ({ setVisible }) => {
  const [question, updateQuestion] = useImmer({
    title: "",
  });

  const handleTextInputChange = (e) => {
    updateQuestion((draft) => {
      draft.title = e.target.value;
    });
  };

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
            <TextInputRk
              onChange={handleTextInputChange}
              label={"عنوان سوال را وارد کنید"}
            />
            <TextAreaRk />
            <ButtonRk
              color={"success"}
              style={{ bottom: 0 }}
              onClick={() => setVisible(false)}
            >
              ذخیره
            </ButtonRk>
          </DashboardRk>
          <ContentSectionRk>
            <TextInputRk
              containerStyle={{ top: "40%", position: "absolute" }}
              label={question.title}
            />
          </ContentSectionRk>
        </div>
      </div>
    </>
  );
};

export default ModalRk;
