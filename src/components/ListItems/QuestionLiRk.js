import React from "react";
import { useDispatch } from "react-redux";

import { SwitchboxRk, IconRk } from "../index";
import {
  questionReqToggled,
  questionReordered,
} from "../../stateStore/formReducer";

const QuestionLiRk = ({
  modalState,
  setModalState,
  question,
  questionUpdate,
  ...otherProps
}) => {
  const dispatch = useDispatch();

  const handleOpenModal = (qType) => {
    setModalState({ isVisibile: true, qType, question: question });
  };
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 16,
        padding: 5,
        paddingTop: 0,
        width: "100% ",
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "0.5fr 8fr 3fr",
      }}
      onClick={() => {
        handleOpenModal(question.questionType);
      }}
    >
      <span>
        <IconRk name={question.questionType} />
      </span>
      <span
        style={{ textOverflow: "ellipsis", width: "100%", overflow: "hidden" }}
      >
        {question.title}
      </span>
      <span onClick={(e) => e.stopPropagation()} style={{ justifySelf: "end" }}>
        <SwitchboxRk
          containerStyle={{ display: "inline" }}
          label={"اجباری؟"}
          role={"switch"}
          onChange={() => {
            dispatch(questionReqToggled(question.order));
          }}
          checked={question.required}
        />
        <IconRk
          onClick={() => {
            dispatch(
              questionReordered({
                order: question.order,
                replace: question.order - 1,
              })
            );
          }}
          name={"chevronUp"}
        />
        <IconRk
          onClick={() => {
            dispatch(
              questionReordered({
                order: question.order,
                replace: question.order + 1,
              })
            );
          }}
          name={"chevronDown"}
        />
      </span>
    </div>
  );
};

export default QuestionLiRk;
