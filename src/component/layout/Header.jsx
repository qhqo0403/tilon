import React from "react";

import { Link } from "react-router-dom";

import StyledHeader from "./Header.styles";
import logo from "../../assets/logo_01.png";
import userImg from "../../assets/profile.png";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>
          <a href="/">
            <img src={logo} alt="centerface logo" />
          </a>
        </h1>
        <ul>
          <Link to="/">홈</Link>
          <Link to="/login">로그인</Link>
          {/* <Link to="/reservation">회의예약</Link> */}
          <Link to="/signup">회원가입</Link>
          {/* <Link to="/meetting-list">회의목록</Link> */}
          <Link to="/faq">자주 묻는 질문</Link>
          {/* <Link to="/">로그아웃</Link>
          <Link to="/mypage" className="userId">
            <img src={userImg} alt="user img" />
            <span>kmlee</span>
          </Link> */}
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;
