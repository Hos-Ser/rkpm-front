import React from "react";
import { useStore } from "react-redux";
import { useImmer } from "use-immer";

import {
  DashboardRk,
  ButtonRk,
  TextAreaRk,
  TextInputRk,
  ContentSectionRk,
} from "../index";
import "./ModalRk.css";
import { addQuestion } from "../../stateStore/questionList";
import template from "../../questionTemplates";

const ModalRk = ({ modalState, setVisible, qType }) => {
  const store = useStore();
  const [question, updateQuestion] = useImmer(template[qType]);
  const handleTextInputChange = (e) => {
    updateQuestion((draft) => {
      draft.title = e.target.value;
    });
  };
  const handleCloseModal = () => {
    setVisible((modalState.visibilty = false));
  };
  const handleSaveQuestion = () => {
    store.dispatch(addQuestion({ question }));
  };

  return (
    <>
      <div className="modal-bg" onClick={handleCloseModal} />
      <div className="centered">
        <div className="my-modal">
          <DashboardRk
            style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
          >
            <ButtonRk className="btn-close mb-2" onClick={handleCloseModal} />
            <TextInputRk
              onChange={handleTextInputChange}
              label={"عنوان سوال را وارد کنید"}
            />
            <TextAreaRk />
            <ButtonRk
              color={"success"}
              style={{ bottom: 0 }}
              onClick={handleSaveQuestion}
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
