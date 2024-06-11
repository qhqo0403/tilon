import React from "react";

import styled from "styled-components";

import CommonInput from "./CommonInput";
import CustomButton from "./CustomButton";

const StyledMyPageForm = styled.form`
  width: 100%;
`;

const MyPageForm = () => {
  return (
    <StyledMyPageForm method="post" action="#">
      <CommonInput
        value="username"
        needText={false}
        labelRequire={false}
        inputValue="이규민"
      >
        성함
      </CommonInput>
      <CommonInput
        value="userEmail"
        needText={false}
        inputValue="kmlee@tilon.com"
      >
        이메일
      </CommonInput>
      <CommonInput value="userPw" type="password">
        비밀번호
      </CommonInput>
      <CommonInput value="newPw" type="password" labelRequire={false}>
        새 비밀번호
      </CommonInput>
      <CommonInput value="confirmNewPw" type="password" labelRequire={false}>
        새 비밀번호 확인
      </CommonInput>
      <CustomButton type="submit" mb={1} colored={true}>
        회원정보 수정
      </CustomButton>
      <CustomButton type="reset">취소</CustomButton>
    </StyledMyPageForm>
  );
};

export default MyPageForm;
