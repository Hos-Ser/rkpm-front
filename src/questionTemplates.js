const sameInAll = (type) => {
  return {
    order: 0,
    questionType: type,
    title: "",
    description: "",
    required: false,
  };
};

const template = {
  //patterne baraye text input ke karbar malom kone chejor chizi mikhad begire: email, url, number, alphabet, number or alphabet
  text: {
    ...sameInAll("text"),
    inputID: "",
    paternType: "text",
  },
  number: {
    ...sameInAll("number"),
    min: 0,
    max: 9,
  },
  // taqvim e shamsi ya miladi
  date: { ...sameInAll("date"), calendar: "shamsi" },
  // list e entekhabi
  checkbox: { ...sameInAll("checkbox"), options: [] },
  // gozine ei ya tak entekhabi
  radio: { ...sameInAll("radio"), options: [] },
  // pasvande file ro taein kone
  file: { ...sameInAll("file"), extention: "" },
  password: { ...sameInAll("password"), minChar: 0, maxChar: 10 },
  //anvae captcha: tarkibe harf / adad / harf or adad
  captcha: {
    ...sameInAll("captcha"),
    captchaType: "",
  },
  // these dont have a standard input type
  textarea: { ...sameInAll("textarea"), maxlength: 500 },
};

export default template;
// select: { ...sameInAll("select"), options: [] },
//I think this one wont needed
