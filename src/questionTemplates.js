const sameInAll = { title: "", description: "", required: false };

const template = {
  //patterne baraye text input ke karbar malom kone chejor chizi mikhad begire: email, url, number, alphabet, number or alphabet
  text: { id: 0, questionType: "text", ...sameInAll, engTitle: "" },
  // taqvim e shamsi ya miladi
  date: { id: 0, questionType: "date", ...sameInAll },
  checkbox: { id: 0, questionType: "checkbox", ...sameInAll },
  // pasvande file ro taein kone
  file: { id: 0, questionType: "file", ...sameInAll },
  password: { id: 0, questionType: "password", ...sameInAll },
  radio: { id: 0, questionType: "radio", ...sameInAll },
  //anvae captcha: tarkibe harf / adad / harf or adad
  captcha: { id: 0, questionType: "captcha" },
  // these dont have a standard input type
  textarea: { id: 0, questionType: "textarea", ...sameInAll },
  select: { id: 0, questionType: "select", ...sameInAll },
};

export default template;
