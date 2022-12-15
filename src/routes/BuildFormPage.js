import React, { useState } from "react";
// import { useStore } from "react-redux";
// import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  ModalRk,
  QuestionBoxRk,
  IconRk,
} from "../components";

const BuildFormPage = () => {
  const [modal, setModal] = useState({ isVisibile: false, qType: "" });
  // const [questions, updateQuestions] = useImmer(
  //   useStore().getState().form.questions
  // );

  const handleOpenModal = (qType) => {
    setModal({ isVisibile: true, qType });
  };

  return (
    <>
      <DashboardRk>
        <ButtonRk
          icon={<IconRk name="text" />}
          onClick={() => {
            handleOpenModal("text");
          }}
          style={{ width: "100%" }}
        >
          متنی
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="date" />}
          onClick={() => {
            handleOpenModal("date");
          }}
          style={{ width: "100%" }}
        >
          تاریخ
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="checkbox" />}
          onClick={() => {
            handleOpenModal("checkbox");
          }}
          style={{ width: "100%" }}
        >
          لیست انتخابی
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="radio" />}
          onClick={() => {
            handleOpenModal("radio");
          }}
          style={{ width: "100%" }}
        >
          گزینه ای
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="file" />}
          onClick={() => {
            handleOpenModal("file");
          }}
          style={{ width: "100%" }}
        >
          فایل
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="password" />}
          onClick={() => {
            handleOpenModal("password");
          }}
          style={{ width: "100%" }}
        >
          رمز
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="textarea" />}
          onClick={() => {
            handleOpenModal("textarea");
          }}
          style={{ width: "100%" }}
        >
          متنی پاسخ بلند
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="select" />}
          onClick={() => {
            handleOpenModal("select");
          }}
          style={{ width: "100%" }}
        >
          چند انتخابی
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="captcha" />}
          onClick={() => {
            handleOpenModal("captcha");
          }}
          style={{ width: "100%" }}
        >
          کپچا
        </ButtonRk>
        <hr />
        <ButtonRk icon={<IconRk name="setting" />} style={{ width: "100%" }}>
          تنظیمات فرم
        </ButtonRk>
      </DashboardRk>
      <ContentSectionRk>
        <QuestionBoxRk />
      </ContentSectionRk>
      {modal.isVisibile && (
        <ModalRk modalState={modal} setVisible={setModal} qType={modal.qType} />
      )}
    </>
  );
};

export default BuildFormPage;
