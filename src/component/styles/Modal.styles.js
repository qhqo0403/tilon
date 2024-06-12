import styled from "styled-components";

const Backdrop = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1500;
  background: rgba(0, 0, 0, 0.6);

  div {
    max-width: 31.25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 3rem 1.5rem;
    box-sizing: border-box;
    border-radius: 0.875rem;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    pre {
      max-height: 28rem;
      max-width: 31.25rem;
      background: rgb(248, 249, 251);
      padding: 1rem;
      margin-bottom: 2rem;
      text-align: left;
      overflow: hidden scroll;
      white-space: pre-wrap;
      word-break: break-all;
      font-size: 0.875rem;
      line-height: 1.3rem;

      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #ccc;
      }
    }
  }
`;

export default Backdrop;
