import styled from "styled-components";

const MeetingWrapper = styled.section`
  width: 100%;
  background: #f9f9f9;
  min-height: 40rem;
  padding: 4rem 0;

  div.innerbox {
    max-width: 65rem;
    margin: 0 auto;

  h3 {
    font-size: 1.875rem;
    font-wieght: 500;
    text-align: center;
    margin-bottom: 3rem;
  }

  button.tabBtn {
    width: 7.5rem;
    height: 2rem;
    background: rgb(229, 229, 229);
    border: none;
    font-size: 0.7rem;
    border-radius: 8px 8px 0 0;
    cursor: pointer;

    &.active {
      background: rgb(245, 124, 0);
      color: #fff;
    }
  }
`;

export default MeetingWrapper;
