import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useImmer } from "use-immer";

import {
  DashboardRk,
  ButtonRk,
  TextAreaRk,
  TextInputRk,
  ContentSectionRk,
  CheckboxRk,
  SelectRk,
  IconRk,
} from "../index";
import "./QuestionModalRk.css";
import { questionAdded } from "../../stateStore/formReducer";
import template from "../../questionTemplates";

const QuestionAddRk = ({ dBclass, modalState, setVisible, qType }) => {
  const dispatch = useDispatch();
  const [question, updateQuestion] = useImmer(template[qType]);
  const [optionField, setOptionField] = useState("");

  const handleInputChange = (whatsChanging) => {
    return (e) => {
      updateQuestion((draft) => {
        draft[whatsChanging] = e.target.value;
      });
    };
  };
  const handleOptionChange = (e) => {
    setOptionField(e.target.value);
  };
  const handleCloseModal = () => {
    setVisible((modalState.isVisibile = false));
  };
  const handleSaveQuestion = () => {
    if (question.title !== "") {
      dispatch(questionAdded({ question }));
      setVisible((modalState.isVisibile = false));
    }
  };
  const handleSaveOption = () => {
    if (optionField !== "") {
      updateQuestion((draft) => {
        draft.options.push(optionField);
      });
      setOptionField("");
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
              width: "40%",
            }}
          >
            <ButtonRk className="btn-close mb-2" onClick={handleCloseModal} />
            {"title" in question && (
              <TextInputRk
                autoFocus
                onChange={handleInputChange("title")}
                label={"عنوان سوال را وارد کنید"}
                maxLength={500}
                containerStyle={{ width: "100%" }}
              />
            )}
            {"description" in question && (
              <TextAreaRk
                onChange={handleInputChange("description")}
                label={"توضیحات سوال را وارد کنید"}
                maxLength={1000}
              />
            )}
            {"required" in question && (
              <CheckboxRk
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
            {"calendar" in question && (
              <SelectRk
                label={"نوع تاریخ"}
                onChange={handleInputChange("calendar")}
                value={question.calendar}
                options={[
                  { label: "شمسی", value: "shamsi" },
                  { label: "میلادی", value: "miladi" },
                ]}
              />
            )}
            {"options" in question && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "9fr 1fr",
                  placeItems: "center",
                }}
              >
                <TextInputRk
                  value={optionField}
                  label={"گزینه ها را اضافه کنید"}
                  onChange={handleOptionChange}
                />
                <span onClick={handleSaveOption}>
                  <IconRk name={"plus"} />
                </span>
              </div>
            )}
            <ButtonRk
              className="position-absolute"
              style={{ position: "absolute", bottom: 11 }}
              onClick={handleSaveQuestion}
            >
              ذخیره
            </ButtonRk>
          </DashboardRk>
          <ContentSectionRk style={{ display: "grid", placeItems: "center" }}>
            <TextInputRk
              label={`${question.title} ${question.required ? "*" : ""}`}
            />
          </ContentSectionRk>
        </div>
      </div>
    </>
  );
};

export default QuestionAddRk;
