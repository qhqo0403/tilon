import React from "react";

import footerLogo from "../../assets/logo_02.png";
import StyledFooter from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="innerbox">
        <div className="left">
          <h2>
            <a href="/">
              <img src={footerLogo} alt="centerface footer logo" />
            </a>
          </h2>
        </div>
        <div className="right">
          <ul>
            <li>주식회사: 틸론</li>
            <li>대표: 최백준, 최경원</li>
            <li>대표전화: 02-2627-9000</li>
            <li>FAX: 02-2627-9099</li>
            <li>사업자번호: 119-81-49757</li>
            <li>통신판매업신고번호: 2020-서울강서-2069</li>
          </ul>
          <address>
            서울 법인 : &#40;07789&#41; 서울시 강서구 마곡중앙14로 22
          </address>
          <address>
            제주 법인 : &#40;63309&#41; 제주특별자치도 제주시 첨단로 213-3 311,
            312호
          </address>
          <span>&#169;TILON Co., Ltd, All Rights Reserved.</span>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
