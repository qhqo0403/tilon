import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";
import Checkbox from "./Checkbox";
import {
  StyledLoginForm,
  InputField,
  CheckboxWrapper,
} from "./styles/LoginForm.styles";

const LoginForm = () => {
  const [isEntered, setIsEntered] = useState(false);
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const handleBlur = (e) => {
    let enteredValue = e.target.value;

    if (enteredValue.trim().length === 0) {
      setIsEntered(false);
    }
  };

  const handleChange = (e) => {
    let userTyping = e.target.value;

    if (userTyping.trim().length > 1) {
      setIsEntered(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledLoginForm action="#" method="post">
      <form>
        <InputField $isEntered={isEntered}>
          <input
            type="text"
            id="id"
            name="id"
            ref={idRef}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <span>아이디</span>
        </InputField>
        <InputField $isEntered={isEntered}>
          <input
            type="password"
            id="pw"
            name="pw"
            ref={pwRef}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <span>비밀번호</span>
        </InputField>
        <CustomButton
          type="button"
          mb={1.875}
          onClick={handleSubmit}
          colored={true}
        >
          로그인
        </CustomButton>
        <CheckboxWrapper>
          <Checkbox value="saveId">아이디 저장</Checkbox>
          <Checkbox value="savePw">비밀번호 저장</Checkbox>
        </CheckboxWrapper>
      </form>
      <Link to="/findPw">
        <CustomButton type="button" mb={1.5}>
          비밀번호 찾기
        </CustomButton>
      </Link>
      <Link to="/signup">
        <CustomButton type="button">회원가입</CustomButton>
      </Link>
    </StyledLoginForm>
  );
};

export default LoginForm;
