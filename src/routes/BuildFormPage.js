import React, { useState } from "react";
import { useImmer } from "use-immer";

import {
  ButtonRk,
  ContentSectionRk,
  DashboardRk,
  ModalRk,
} from "../components";

const BuildFormPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputList, updateInputList] = useImmer({});

  return (
    <>
      <DashboardRk>
        <ButtonRk
          onClick={() => {
            setModalVisible(true);
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
      {modalVisible && <ModalRk setVisible={setModalVisible} />}
    </>
  );
};

export default BuildFormPage;
