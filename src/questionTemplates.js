const sameInAll = { title: "", description: "", required: false };

const template = {
  //patterne baraye text input ke karbar malom kone chejor chizi mikhad begire: email, url, number, alphabet, number or alphabet
  text: {
    id: 0,
    questionType: "text",
    ...sameInAll,
    engTitle: "",
    parternType: "text",
  },
  // taqvim e shamsi ya miladi
  date: { id: 0, questionType: "date", ...sameInAll, dateType: "" },
  checkbox: { id: 0, questionType: "checkbox", ...sameInAll, options: [] },
  // pasvande file ro taein kone
  file: { id: 0, questionType: "file", ...sameInAll, extention: "" },
  password: { id: 0, questionType: "password", ...sameInAll, isHidden: true },
  radio: { id: 0, questionType: "radio", ...sameInAll, options: [] },
  //anvae captcha: tarkibe harf / adad / harf or adad
  captcha: {
    id: 0,
    questionType: "captcha",
    required: false,
    title: "",
    captchaType: "",
  },
  // these dont have a standard input type
  textarea: { id: 0, questionType: "textarea", ...sameInAll, maxlength: 500 },
  select: { id: 0, questionType: "select", ...sameInAll, options: [] },
};

export default template;
