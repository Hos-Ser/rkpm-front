import React from "react";
import { useStore } from "react-redux";
import { useImmer } from "use-immer";

import {
  DashboardRk,
  ButtonRk,
  TextAreaRk,
  TextInputRk,
  ContentSectionRk,
  CheckboxRK,
} from "../index";
import "./ModalRk.css";
import { addQuestion } from "../../stateStore/questionList";
import template from "../../questionTemplates";

const ModalRk = ({ modalState, setVisible, qType }) => {
  const store = useStore();
  const [question, updateQuestion] = useImmer(template[qType]);

  const handleTextInputChange = (whatsChanging) => {
    return function (e) {
      updateQuestion((draft) => {
        draft[whatsChanging] = e.target.value;
      });
    };
  };
  const handleCloseModal = () => {
    setVisible((modalState.isVisibile = false));
  };
  const handleSaveQuestion = () => {
    store.dispatch(addQuestion({ question }));
    setVisible((modalState.isVisibile = false));
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
            {"title" in question && (
              <TextInputRk
                onChange={handleTextInputChange("title")}
                label={"عنوان سوال را وارد کنید"}
              />
            )}
            {"description" in question && (
              <TextAreaRk
                onChange={handleTextInputChange("description")}
                label={"توضیحات سوال را وارد کنید"}
              />
            )}
            {"required" in question && (
              <CheckboxRK
                label={"اجباری؟"}
                role={"switch"}
                isSwitch={true}
                onChange={() =>
                  updateQuestion((draft) => {
                    draft.required = !draft.required;
                  })
                }
              />
            )}
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
              label={`${question.title} ${question.required ? "*" : ""}`}
            />
          </ContentSectionRk>
        </div>
      </div>
    </>
  );
};

export default ModalRk;
