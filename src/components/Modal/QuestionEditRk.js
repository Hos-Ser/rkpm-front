import React from "react";
import { useDispatch } from "react-redux";
import { useImmer } from "use-immer";

import {
  DashboardRk,
  ButtonRk,
  TextAreaRk,
  TextInputRk,
  ContentSectionRk,
  CheckboxRK,
} from "../index";
import "./QuestionModalRk.css";
import { questionEdited } from "../../stateStore/formReducer";

const QuestionEditRk = ({ modalState, setVisible }) => {
  const dispatch = useDispatch();
  const [question, updateQuestion] = useImmer(modalState.question);

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
    dispatch(questionEdited({ question }));
    setVisible((modalState.isVisibile = false));
  };
  return (
    <>
      <div className="modal-bg" onClick={handleCloseModal} />
      <div className="centered">
        <div className="my-modal">
          <DashboardRk
            style={{
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
              backgroundColor: "#e9ecef",
            }}
          >
            <ButtonRk className="btn-close mb-2" onClick={handleCloseModal} />
            {"title" in question && (
              <TextInputRk
                value={question.title}
                onChange={handleTextInputChange("title")}
                label={"عنوان سوال را وارد کنید"}
              />
            )}
            {"description" in question && (
              <TextAreaRk
                value={question.description}
                onChange={handleTextInputChange("description")}
                label={"توضیحات سوال را وارد کنید"}
              />
            )}
            {"required" in question && (
              <CheckboxRK
                checked={question.required}
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
              className="position-absolute"
              style={{ position: "absolute", bottom: 11 }}
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

export default QuestionEditRk;
