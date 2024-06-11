import React from "react";

import LoginForm from "../component/LoginForm";
import LoginWrapper from "./styles/Login.styles";

const Login = () => {
  return (
    <LoginWrapper>
      <div className="innerbox">
        <div className="textbox">
          <p>CenterFace Login</p>
          <p>
            CenterFace와 함께 평범한 화상회의를
            <br />
            특별하게 만나보세요
          </p>
        </div>
        <LoginForm />
      </div>
    </LoginWrapper>
  );
};

export default Login;
