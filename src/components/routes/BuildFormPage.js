import React, { useState } from "react";
import { useImmer } from "use-immer";

import { ButtonRk, DashboardRk, ModalRk } from "../index";

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
        >
          صفحه خوش‌آمد گویی
        </ButtonRk>
        <hr />
        <ButtonRk color={"primary"}>متنی با پاسخ بلند</ButtonRk>
        <ButtonRk color={"primary"}>متنی با پاسخ کوتاه</ButtonRk>
        <ButtonRk color={"primary"}>چند‌ گزینه‌ای</ButtonRk>
        <ButtonRk color={"primary"}>گروه سوال</ButtonRk>
        <ButtonRk color={"primary"}>لیست کشویی</ButtonRk>
        <ButtonRk color={"primary"}>عدد</ButtonRk>
        <ButtonRk color={"primary"}>طیفی</ButtonRk>
        <ButtonRk color={"primary"}>ایمیل</ButtonRk>
        <ButtonRk color={"primary"}>لینک یا وبسایت</ButtonRk>
        <ButtonRk color={"primary"}>متن توضیحات</ButtonRk>
        <hr />
        <ButtonRk color={"primary"}>متنی با پاسخ بلند</ButtonRk>
      </DashboardRk>
      <div
        className="p-3"
        style={{ overflowY: "visible", overflowX: "auto", width: "100%" }}
      >
        <ButtonRk color={"danger"}>save</ButtonRk>
      </div>
      {modalVisible && <ModalRk setIsOpen={setModalVisible} />}
    </>
  );
};

export default BuildFormPage;
