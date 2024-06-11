import React, { useState } from "react";
import styled from "styled-components";
import FaqListItem from "./FaqListItem";

const StyledList = styled.ul`
  max-width: 65rem;
  margin: 0 auto;
`;

const faqData = [
  {
    id: 1,
    question: "[회원가입] 개인정보를 조회 또는 수정하고 싶어요.",
    answer:
      "회원 로그인 후 마이페이지에서 개인정보를 조회 및 수정 하실 수 있습니다.",
  },
  {
    id: 2,
    question: "[회원가입] 한 사람이 여러 ID를 신청해도 되나요?",
    answer:
      "한 사람이 하나의 개인 ID만 사용이 가능합니다. 실명회원 1인당 한 개의 ID만을 보유할 수 있습니다.",
  },
  {
    id: 3,
    question: "[서비스 신청] 화상회의 시작은 어떻게 하나요?",
    answer:
      "로그인 후 회의예약 메뉴를 통해 회의를 예약하고 예약된 회의를 시작하면 됩니다.",
  },
  {
    id: 4,
    question: "[서비스 이용] 화상회의 내역은 어디서 확인할 수 있나요?",
    answer:
      "회의목록 메뉴에서 지금까지 해왔던 화상회의 목록을 확인할 수 있습니다.",
  },
  {
    id: 5,
    question:
      "[서비스 이용] 아이디 또는 패스워드를 잊어버렸을 경우는 어떻게 하나요?",
    answer:
      "메인페이지의 아이디/패스워드 찾기 페이지에서 본인인증을 통해 확인할 수 있습니다.",
  },
  {
    id: 6,
    question:
      "[서비스 이용] 센터페이스를 이용하려면 프로그램을 설치해야 하나요?",
    answer:
      "센터페이스는 별도의 프로그램 설치없이 웹에서 바로 이용 가능한 서비스입니다.",
  },
  {
    id: 7,
    question: "[서비스 이용] 회의 입장 인원을 제한할 수 있나요?",
    answer:
      "회의 예약 페이지의 설정 부분에서 회의 입장 인원을 제한할 수 있습니다.",
  },
  {
    id: 8,
    question: "[서비스 이용] 툴바 UI를 변경하고 싶어요.",
    answer:
      "회의 예약 페이지의 설정 부분에서 원하는 툴바 메뉴만 선택해서 사용할 수 있습니다.",
  },
];

const FaqList = () => {
  const [clickedList, setClickedList] = useState(null);

  const handleClickedList = (faqId) => {
    setClickedList(faqId);
  };

  return (
    <StyledList>
      {faqData.map((faq) => (
        <FaqListItem
          key={faq.id}
          faqData={faq}
          onClickList={handleClickedList}
          clicked={clickedList}
        />
      ))}
    </StyledList>
  );
};

export default FaqList;
