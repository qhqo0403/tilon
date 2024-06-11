import styled from "styled-components";

import bannerImg from "../../assets/banner_01.png";

const MainBanner = styled.section`
  width: 100%;
  background: rgb(232, 241, 255) url(${bannerImg}) no-repeat right 16.875rem
    center;
  background-size: contain;
  padding: 7.5rem 0;

  div {
    width: 84rem;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem;
      font-weight: 500;
      margin-bottom: 1.875rem;
    }

    p {
      line-height: 1.3rem;
      margin-bottom: 3.125rem;
    }

    button {
      width: 9.375rem;
      height: 2.813rem;
      background: #fff;
      color: rgb(245, 124, 0);
      font-size: 0.875rem;
      font-weight: bold;
      border: 1px solid #f1f1f1;
      border-radius: 0.5rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
`;

const MainContent = styled.section`
  width: 84.375rem;
  margin: 0 auto;
  padding: 6.25rem 0;

  h3 {
    font-size: 1.875rem;
    text-align: center;
    margin-bottom: 5rem;

    span {
      color: rgb(245, 124, 0);
      font-weight: 500;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    li {
      width: 14.063rem;
      height: 14.063rem;
      padding: 0.938rem 0.625rem;
      background: rgb(255, 250, 242);
      border: 1px solid rgb(246, 233, 219);
      border-radius: 0.625rem;

      span {
        display: block;
        position: relative;
        color: rgb(245, 124, 0);
        padding-bottom: 0.938rem;
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        padding-bottom: 0.938rem;
        margin-bottom: 0.625rem;

        &::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 2.5rem;
          height: 0.125rem;
          background: rgb(245, 124, 0);
        }
      }

      h4 {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1.25rem;
      }

      p {
        word-break: break-all;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

export { MainBanner, MainContent };
