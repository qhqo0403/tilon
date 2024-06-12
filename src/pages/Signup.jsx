import React from "react";

import SignupWrapper from "./styles/Signup.styles";
import SignupForm from "../component/SignupForm";

const Signup = () => {
  return (
    <SignupWrapper>
      <div className="innerbox">
        <h3>CenterFace 회원가입</h3>
        <p className="text">
          쉽고 간편한 회원가입으로 CenterFace를 사용하실 수 있습니다.
        </p>
        <SignupForm />
      </div>
    </SignupWrapper>
  );
};

export default Signup;
