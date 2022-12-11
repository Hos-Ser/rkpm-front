import React, { useState } from "react";
// import { useStore } from "react-redux";
// import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  ModalRk,
} from "../components";

const BuildFormPage = () => {
  const [modal, setModal] = useState({ isVisibile: false, qType: "" });
  // const [inputList, updateInputList] = useImmer({});

  const handleOpenModal = (qType) => {
    setModal({ isVisibile: true, qType });
  };

  return (
    <>
      <DashboardRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          صفحه خوش‌آمد گویی
        </ButtonRk>
        <hr />
        <ButtonRk
          onClick={() => {
            handleOpenModal("text");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          متنی با پاسخ کوتاه
        </ButtonRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("textarea");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          متنی با پاسخ بلند
        </ButtonRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("radio");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          چند‌ گزینه‌ای
        </ButtonRk>
        {/* <ButtonRk
          onClick={() => {
            handleOpenModal("");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          گروه سوال
        </ButtonRk> */}
        <ButtonRk
          onClick={() => {
            handleOpenModal("select");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          لیست کشویی
        </ButtonRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("number");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          عدد
        </ButtonRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("range");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          طیفی
        </ButtonRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("email");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          ایمیل
        </ButtonRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("url");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          لینک یا وبسایت
        </ButtonRk>
        {/* <ButtonRk
          onClick={() => {
            handleOpenModal("");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          متن توضیحات
        </ButtonRk> */}
        <hr />
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          صفحه تشکر
        </ButtonRk>
      </DashboardRk>
      <ContentSectionRk></ContentSectionRk>
      {modal.isVisibile && (
        <ModalRk modalState={modal} setVisible={setModal} qType={modal.qType} />
      )}
    </>
  );
};

export default BuildFormPage;
