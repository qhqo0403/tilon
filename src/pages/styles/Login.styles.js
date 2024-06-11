import styled from "styled-components";

import loginImg from "../../assets/banner_02.png";

const LoginWrapper = styled.section`
  position: relative;
  min-height: 42rem;
  background: #f9f9f9;
  padding: 5rem 0 0;

  div.innerbox {
    width: 62.5rem;
    margin: 0 auto;
    border-radius: 0.625rem;
    overflow: hidden;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    div.textbox {
      width: 50%;
      min-height: 32.813rem;
      box-sizing: border-box;
      padding: 3.125rem 2.5rem;
      color: rgb(52, 60, 117);
      background: rgb(222, 232, 255) url(${loginImg}) no-repeat left -0.8rem bottom;
      background-size: cover;

      p:first-of-type {
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 1.25rem;
      }

      p:last-of-type {
        font-size: 1.125rem;
        line-height: 1.5rem;
      }
    }
  }
`;

export default LoginWrapper;
