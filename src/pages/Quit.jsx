import React from "react";

import styled from "styled-components";
import CommonInput from "../component/CommonInput";
import CustomButton from "../component/CustomButton";

const QuitWrapper = styled.section`
  width: 100%;
  background: #f9f9f9;
  min-height: 40rem;
  padding: 4rem 0;

  div.innerbox {
    max-width: 33rem;
    margin: 0 auto;
    text-align: center;

  h3 {
    font-size: 1.875rem;
    font-wieght: 500;
    margin-bottom: 0.875rem;
  }

  p.text {
    margin-bottom: 1.5rem;
  }
`;

const Description = styled.div`
  width: 100%;
  padding: 1rem;
  background: #fff;
  text-align: left;
  box-sizing: border-box;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;

  h4 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: inside;
    font-size: 1rem;
    color: #555;

    li {
      margin-bottom: 0.3rem;

      p {
        display: inline-block;
        vertical-align: top;
      }
    }

    li::marker {
      font-size: 0.75rem;
    }
  }
`;

const Quit = () => {
  return (
    <QuitWrapper>
      <div className="innerbox">
        <h3>회원 탈퇴 신청</h3>
        <p className="text">
          회원 탈퇴 전 반드시 유의사항을 확인하시길 바랍니다.
        </p>
        <Description>
          <h4>회원 탈퇴 시 유의사항</h4>
          <ul>
            <li>
              <p>
                회원 탈퇴를 하시려면 사용 중이던 상품을 해지하셔야 합니다.{" "}
                <br />
                &#40;회원정보 수정&gt;해지&#41;
              </p>
            </li>
            <li>
              <p>
                회원 탈퇴 시 입력하신 개인정보는 개인정보처리방침에 따라
                폐기되며,
                <br />
                재가입 시에도 기존 정보는 복원되지 않습니다.
              </p>
            </li>
            <li>탈퇴 시 3개월간 재가입이 불가능합니다.</li>
          </ul>
        </Description>
        <form action="#" method="post">
          <CommonInput needText={false} labelRequire={false} inputValue="kmlee">
            아이디
          </CommonInput>
          <CommonInput type="password" needText={false} labelRequire={false}>
            비밀번호
          </CommonInput>
          <CustomButton colored={true} mb="1" type="button">
            회원 탈퇴
          </CustomButton>
          <CustomButton>돌아가기</CustomButton>
        </form>
      </div>
    </QuitWrapper>
  );
};

export default Quit;
