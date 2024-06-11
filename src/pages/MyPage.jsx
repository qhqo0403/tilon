import React from "react";

import MyPageWrapper from "./styles//MyPage.styles";
import MyPageForm from "../component/MyPageForm";

const MyPage = () => {
  return (
    <MyPageWrapper>
      <div className="innerbox">
        <h3>마이페이지</h3>
        <p className="text">마이페이지에서는 연락처 등 수정이 가능합니다.</p>
        <MyPageForm />
        <button className="quitBtn">회원 탈퇴 신청</button>
      </div>
    </MyPageWrapper>
  );
};

export default MyPage;
