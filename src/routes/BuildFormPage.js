import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useImmer } from "use-immer";

import {
  ContentSectionRk,
  DashboardRk,
  QuestionAddRk,
  QuestionEditRk,
  QuestionLiRk,
  DashbordLiRk,
} from "../components";

const OpList = [
  { type: "text", label: "سوالات متنی" },
  { type: "number", label: "عددی" },
  { type: "date", label: "تاریخ" },
  { type: "checkbox", label: "لیست انتخابی" },
  { type: "radio", label: "گزینه ای" },
  { type: "file", label: "فایل" },
  { type: "password", label: "رمز" },
  { type: "textarea", label: "متنی پاسخ بلند" },
  { type: "captcha", label: "کپچا" },
];

const BuildFormPage = () => {
  const [modal, setModal] = useState({ isVisibile: false, qType: "" });
  const [modalEdit, setModalEdit] = useState({
    isVisibile: false,
    qType: "",
    question: {},
  });
  const questions = useSelector((state) => state.form.questions);

  const handleOpenModal = (qType) => {
    setModal({ isVisibile: true, qType });
  };

  return (
    <>
      <DashboardRk>
        <div style={{ width: "100%" }}>
          {OpList.map((item, index) => {
            return (
              <DashbordLiRk
                key={index}
                icon={item.type}
                onClick={() => {
                  handleOpenModal("text");
                }}
              >
                {item.label}
              </DashbordLiRk>
            );
          })}
        </div>
        <DashbordLiRk icon={"setting"} containerStyle={{ placeSelf: "end" }}>
          {"تنظیمات"}
        </DashbordLiRk>
      </DashboardRk>
      <ContentSectionRk>
        <ul style={{ listStyle: "persian" }}>
          {questions.map((item) => {
            return (
              <li key={item.order} className="mb-2">
                <QuestionLiRk
                  modalState={modalEdit}
                  setModalState={setModalEdit}
                  question={item}
                />
              </li>
            );
          })}
        </ul>
      </ContentSectionRk>
      {modal.isVisibile && (
        <QuestionAddRk
          dBclass={`${modal.qType}-icon`}
          modalState={modal}
          setVisible={setModal}
          qType={modal.qType}
        />
      )}
      {modalEdit.isVisibile && (
        <QuestionEditRk
          dBclass={`${modalEdit.qType}-icon`}
          modalState={modalEdit}
          setVisible={setModalEdit}
          qType={modalEdit.qType}
        />
      )}
    </>
  );
};

export default BuildFormPage;
