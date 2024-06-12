import React from "react";
import styled from "styled-components";
import FaqList from "../component/FaqList";

const FaqWrapper = styled.div`
  width: 100%;
  background: #f9f9f9;
  min-height: 40rem;
  padding: 4rem 0;

  h3 {
    font-size: 1.875rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

const Faq = () => {
  return (
    <FaqWrapper>
      <h3>자주 묻는 질문</h3>
      <FaqList />
    </FaqWrapper>
  );
};

export default Faq;
