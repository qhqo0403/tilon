import styled from "styled-components";

const MyPageWrapper = styled.section`
  width: 100%;
  background: #f9f9f9;
  min-height: 40rem;
  padding: 4rem 0;

  div.innerbox {
    max-width: 29rem;
    text-align: center;
    margin: 0 auto;

  h3 {
    font-size: 1.875rem;
    font-wieght: 500;
    margin-bottom: 0.875rem;
  }

  p.text {
    margin-bottom: 1.5rem;
  }

  button.quitBtn {
    width: 100%;
    text-align: right;
    margin-top: 0.5rem;
    border: 0;
    color: #777;
    background: transparent;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #555;
    }
  }
`;

export default MyPageWrapper;
