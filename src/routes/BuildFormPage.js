import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  QuestionModalRk,
  QuestionBoxRk,
  IconRk,
} from "../components";

const BuildFormPage = () => {
  const [modal, setModal] = useState({ isVisibile: false, qType: "" });
  const questions = useSelector((state) => state.form.questions);

  const items = questions.map((item) => {
    return (
      <li key={item.id} className="mb-2">
        <QuestionBoxRk question={item} />
      </li>
    );
  });

  const handleOpenModal = (qType) => {
    setModal({ isVisibile: true, qType });
  };

  return (
    <>
      <DashboardRk>
        <ButtonRk color={"primary"} style={{ width: "100%" }}>
          صفحه خوش‌آمد گویی
        </ButtonRk>
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
        <ul style={{ listStyle: "persian" }}>{items}</ul>
      </ContentSectionRk>
      {modal.isVisibile && (
        <QuestionModalRk
          modalState={modal}
          setVisible={setModal}
          qType={modal.qType}
        />
      )}
    </>
  );
};

export default BuildFormPage;
