import React, { useState } from "react";
import {
  MdTextFields,
  MdDateRange,
  MdChecklistRtl,
  MdFilePresent,
  MdPassword,
  MdRadioButtonChecked,
  MdTextSnippet,
  MdSettings,
} from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
// import { FaRobot } from "react-icons/fa";
// import { useStore } from "react-redux";
// import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  ModalRk,
  QuestionBoxRk,
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
        <ButtonRk
          icon={
            <MdTextFields style={{ marginLeft: 9, verticalAlign: "center" }} />
          }
          onClick={() => {
            handleOpenModal("text");
          }}
          style={{ width: "100%" }}
        >
          متنی
        </ButtonRk>
        <ButtonRk
          icon={
            <MdDateRange style={{ marginLeft: 9, verticalAlign: "center" }} />
          }
          onClick={() => {
            handleOpenModal("radio");
          }}
          style={{ width: "100%" }}
        >
          تاریخ
        </ButtonRk>
        <ButtonRk
          icon={
            <MdChecklistRtl
              style={{ marginLeft: 9, verticalAlign: "center" }}
            />
          }
          onClick={() => {
            handleOpenModal("checkbox");
          }}
          style={{ width: "100%" }}
        >
          لیست انتخابی
        </ButtonRk>
        <ButtonRk
          icon={
            <MdRadioButtonChecked
              style={{ marginLeft: 9, verticalAlign: "center" }}
            />
          }
          onClick={() => {
            handleOpenModal("radio");
          }}
          style={{ width: "100%" }}
        >
          گزینه ای
        </ButtonRk>
        <ButtonRk
          icon={
            <MdFilePresent style={{ marginLeft: 9, verticalAlign: "center" }} />
          }
          onClick={() => {
            handleOpenModal("file");
          }}
          style={{ width: "100%" }}
        >
          فایل
        </ButtonRk>
        <ButtonRk
          icon={
            <MdPassword style={{ marginLeft: 9, verticalAlign: "center" }} />
          }
          onClick={() => {
            handleOpenModal("password");
          }}
          style={{ width: "100%" }}
        >
          رمز
        </ButtonRk>
        <ButtonRk
          icon={
            <MdTextSnippet style={{ marginLeft: 9, verticalAlign: "center" }} />
          }
          onClick={() => {
            handleOpenModal("textarea");
          }}
          style={{ width: "100%" }}
        >
          متنی پاسخ بلند
        </ButtonRk>
        <ButtonRk
          icon={
            <BiSelectMultiple
              style={{ marginLeft: 9, verticalAlign: "center" }}
            />
          }
          onClick={() => {
            handleOpenModal("select");
          }}
          style={{ width: "100%" }}
        >
          چند انتخابی
        </ButtonRk>
        <hr />
        <ButtonRk
          icon={
            <MdSettings style={{ marginLeft: 9, verticalAlign: "center" }} />
          }
          style={{ width: "100%" }}
        >
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
