import React, { useState } from "react";
import { useStore } from "react-redux";
import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  ModalRk,
} from "../components";
import template from "../questionTemplates";
import { addQuestion } from "../stateStore/questionList";

const BuildFormPage = () => {
  const [modal, setModal] = useState({ visibilty: false, qType: "" });
  const [inputList, updateInputList] = useImmer({});

  const handleOpenModal = (qType) => {
    setModal({ visibilty: true, qType });
  };

  return (
    <>
      <DashboardRk>
        <ButtonRk
          onClick={() => {
            handleOpenModal("text");
          }}
          color={"primary"}
          style={{ width: "100%" }}
        >
          صفحه خوش‌آمد گویی
        </ButtonRk>
        <hr />
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          متنی با پاسخ بلند
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          متنی با پاسخ کوتاه
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          چند‌ گزینه‌ای
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          گروه سوال
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          لیست کشویی
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          عدد
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          طیفی
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          ایمیل
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          لینک یا وبسایت
        </ButtonRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          متن توضیحات
        </ButtonRk>
        <hr />
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          صفحه تشکر
        </ButtonRk>
      </DashboardRk>
      <ContentSectionRk></ContentSectionRk>
      {modal.visibilty && (
        <ModalRk modalState={modal} setVisible={setModal} qType={modal.qType} />
      )}
    </>
  );
};

export default BuildFormPage;
