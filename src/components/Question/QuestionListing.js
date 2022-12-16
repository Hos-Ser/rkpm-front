import React from "react";

import { QuestionBoxRk } from "../index";

const QuestionListing = ({ array }) => {
  const items = array.map((item) => {
    <li>
      <QuestionBoxRk />
    </li>;
  });
  return <ul>{items}</ul>;
};

export default QuestionListing;
