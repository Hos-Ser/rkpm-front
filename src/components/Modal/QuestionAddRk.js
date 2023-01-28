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
  SwitchboxRk,
  OptionLiRk,
  NumberInputRk,
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
  const handleMinMaxChange = (whatsChanging) => {
    return (e) => {
      updateQuestion((draft) => {
        draft[whatsChanging] = parseInt(e.target.value);
      });
    };
  };
  const handleCloseModal = () => {
    setVisible((modalState.isVisibile = false));
  };
  const handleOptionChange = (e) => {
    setOptionField(e.target.value);
  };
  const handleSaveOption = () => {
    if (optionField !== "") {
      updateQuestion((draft) => {
        draft.options.push(optionField);
      });
      setOptionField("");
    }
  };
  const handleOnchangeOption = (e, index) => {
    updateQuestion((draft) => {
      draft.options[index] = e.target.value;
    });
  };
  const handleRmoveOption = (index) => {
    updateQuestion((draft) => {
      draft.options.splice(index, 1);
    });
  };
  const handleSaveQuestion = () => {
    if (question.title !== "") {
      dispatch(questionAdded({ question }));
      setVisible((modalState.isVisibile = false));
    }
  };
  return (
    <>
      <div className="modal-bg" onClick={handleCloseModal} />
      <div className="centered">
        <div className="my-modal">
          <DashboardRk className={`modal-db ${dBclass}`}>
            <ButtonRk className="btn-close mb-2" onClick={handleCloseModal} />
            {"title" in question && (
              <TextInputRk
                value={question.title}
                autoFocus
                onChange={handleInputChange("title")}
                label={"عنوان سوال را وارد کنید"}
                maxLength={500}
                containerStyle={{ width: "100%" }}
              />
            )}
            {"description" in question && (
              <TextAreaRk
                value={question.description}
                onChange={handleInputChange("description")}
                label={"توضیحات سوال را وارد کنید"}
                maxLength={1000}
              />
            )}
            {"required" in question && (
              <SwitchboxRk
                label={"اجباری؟"}
                role={"switch"}
                onChange={() =>
                  updateQuestion((draft) => {
                    draft.required = !draft.required;
                  })
                }
              />
            )}
            {"min" in question && (
              <NumberInputRk
                label={"حداقل"}
                value={question.min}
                onChange={handleMinMaxChange("min")}
                max={question.max - 1}
                style={{
                  display: "inline",
                  width: "auto",
                  marginRight: "0.5rem",
                }}
              />
            )}
            {"max" in question && (
              <NumberInputRk
                label={"حداکثر"}
                value={question.max}
                onChange={handleMinMaxChange("max")}
                min={question.min + 1}
                style={{
                  display: "inline",
                  width: "auto",
                  marginRight: "0.5rem",
                }}
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
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "9fr 1fr",
                  }}
                >
                  <TextInputRk
                    value={optionField}
                    label={"گزینه ها را اضافه کنید"}
                    onChange={handleOptionChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSaveOption();
                    }}
                  />
                  <span
                    style={{ placeSelf: "center" }}
                    onClick={handleSaveOption}
                  >
                    <IconRk name={"plus"} />
                  </span>
                </div>
                {question.options.map((option, index) => (
                  <OptionLiRk
                    key={index}
                    value={option}
                    handleDelete={() => handleRmoveOption(index)}
                    onChange={(e) => handleOnchangeOption(e, index)}
                  />
                ))}
              </>
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
            {(qType === "text" || qType === "textarea") && (
              <TextInputRk
                label={`${question.title} ${question.required ? "*" : ""}`}
              />
            )}
            {"options" in question && (
              <CheckboxRk legend={question.title} options={question.options} />
            )}
          </ContentSectionRk>
        </div>
      </div>
    </>
  );
};

export default QuestionAddRk;
