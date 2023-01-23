import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  QuestionAddRk,
  QuestionEditRk,
  QuestionLiRk,
  IconRk,
} from "../components";

const BuildFormPage = () => {
  const [modal, setModal] = useState({ isVisibile: false, qType: "" });
  const [modalEdit, setModalEdit] = useState({
    isVisibile: false,
    qType: "",
    question: {},
  });
  const questions = useSelector((state) => state.form.questions);

  const items = questions.map((item) => {
    return (
      <li key={item.order} className="mb-2">
        <QuestionLiRk
          modalState={modalEdit}
          setModalState={setModalEdit}
          question={item}
        />
      </li>
    );
  });

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
          سوالات متنی
        </ButtonRk>
        <ButtonRk
          icon={<IconRk name="number" />}
          onClick={() => {
            handleOpenModal("number");
          }}
          style={{ width: "100%" }}
        >
          عددی
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
        <ul style={{ listStyle: "persian" }}>{items}</ul>
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
