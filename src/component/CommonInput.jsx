import React, { useEffect, useState } from "react";

import InputField from "./styles/CommonInput.styles";

const CommonInput = ({
  children,
  value,
  type = "text",
  needText = true,
  labelRequire = true,
  inputValue,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [showConfirm, setShowConfirmText] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    if (inputValue) {
      setIsEntered(true);
    } else {
      setIsEntered(false);
    }
  }, []);

  const handleBlur = (e) => {
    let enteredValue = e.target.value;

    if (enteredValue.trim().length === 0) {
      setShowConfirmText(true);
      setIsEntered(false);
    }
  };

  const handleChange = (e) => {
    let userTyping = e.target.value;

    if (userTyping.trim().length > 1) {
      setShowConfirmText(false);
      setIsEntered(true);
    }
  };

  const validationText = showConfirm && <p>필수 정보입니다</p>;

  return (
    <InputField $isEntered={isEntered}>
      <input
        type={type}
        id={value}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        required
      />
      <label htmlFor={value}>
        {children} {labelRequire && <span>&#40;필수&#41;</span>}
      </label>
      {needText && validationText}
    </InputField>
  );
};

export default CommonInput;
