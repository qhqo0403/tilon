import styled from "styled-components";

const InputField = styled.div`
  width: 100%;
  min-height: 4.375rem;
  margin: 0 auto;
  position: relative;
  margin-bottom: 0.65rem;

  input {
    width: 100%;
    height: 3.2rem;
    padding-left: 0.9rem;
    padding-top: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 1rem;
    margin-bottom: 0.3rem;

    &:focus {
      outline: none;
      border-color: rgb(245, 124, 0);
    }

    &:focus + label {
      font-size: 0.75rem;
      top: 9%;
    }

    &:focus + label span {
      display: inline-block;
    }
  }

  label {
    display: block;
    position: absolute;
    left: 0.875rem;
    top: ${(props) => (props.$isEntered ? "9%" : "25%")};
    font-size: ${(props) => (props.$isEntered ? "0.75rem" : "0.875rem")};
    color: #999;
    transition: all 0.3s;

    span {
      color: crimson;
      display: ${(props) => (props.$isEntered ? "inline-block" : "none")};
    }
  }

  p {
    color: crimson;
    text-align: left;
    font-size: 0.875rem;
    text-indent: 0.1rem;
  }
`;

export default InputField;
