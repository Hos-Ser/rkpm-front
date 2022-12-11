const sameInAll = { title: "", description: "", required: false };

const template = {
  //patterne baraye text input ke karbar malom kone chejor chizi mikhad begire: email, url, number, alphabet, number or alphabet
  text: { questionType: "text", ...sameInAll, engTitle: "" },
  number: { questionType: "number", ...sameInAll, min: 0, max: 10 },
  // taqvim e shamsi ya miladi
  date: { questionType: "date", ...sameInAll },
  checkbox: { questionType: "chechbox", ...sameInAll },
  // pasvande file ro taein kone
  file: { questionType: "file", ...sameInAll },
  password: { questionType: "password", ...sameInAll },
  radio: { questionType: "radio", ...sameInAll },
  //anvae captcha: tarkibe harf / adad / harf or adad
  captcha: {},
  // these dont have a standard input type
  textarea: { questionType: "textarea", ...sameInAll },
  select: { questionType: "select", ...sameInAll },
};

export default template;
