import React from "react";

const TextAreaRk = ({ label }) => {
  return (
    <div className="mb-2">
      <label className="form-label text-black">
        {label}
        <textarea className="form-control mt-2"></textarea>
      </label>
    </div>
  );
};

export default TextAreaRk;
