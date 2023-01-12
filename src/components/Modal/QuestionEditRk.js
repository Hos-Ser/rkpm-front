import React from "react";
import { useDispatch } from "react-redux";
import { useImmer } from "use-immer";

import {
  DashboardRk,
  ButtonRk,
  TextAreaRk,
  TextInputRk,
  ContentSectionRk,
  CheckboxRk,
} from "../index";
import "./QuestionModalRk.css";
import { questionEdited } from "../../stateStore/formReducer";

const QuestionEditRk = ({ dBclass, modalState, setVisible }) => {
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
    if (question.title !== "") {
      dispatch(questionEdited({ question }));
      setVisible((modalState.isVisibile = false));
    }
  };
  return (
    <>
      <div className="modal-bg" onClick={handleCloseModal} />
      <div className="centered">
        <div className="my-modal">
          <DashboardRk
            className={`${dBclass}`}
            style={{
              borderTopRightRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <ButtonRk className="btn-close mb-2" onClick={handleCloseModal} />
            {"title" in question && (
              <TextInputRk
                autoFocus
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
              <CheckboxRk
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
