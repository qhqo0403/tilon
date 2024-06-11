import React from "react";
import { Link } from "react-router-dom";

import FindWrapper from "./styles/FindPw.styles";
import CommonInput from "../component/CommonInput";
import CustomButton from "../component/CustomButton";

const FindPw = () => {
  return (
    <FindWrapper>
      <div className="innerbox">
        <h3>비밀번호 찾기</h3>
        <p className="text">
          비밀번호 재설정을 위해 가입시 등록한 이메일 주소를 입력해 주세요.
        </p>
        <form action="#" method="post">
          <CommonInput value="findPwEmail">이메일</CommonInput>
          <CustomButton type="button" mb={1.5} colored={true}>
            이메일 발송
          </CustomButton>
          <Link to="/signup">
            <CustomButton type="button">회원가입</CustomButton>
          </Link>
        </form>
      </div>
    </FindWrapper>
  );
};

export default FindPw;
