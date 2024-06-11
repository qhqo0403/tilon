import styled from "styled-components";

const StyledCheckbox = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  span {
    display: inline-block;
    width: 1.563rem;
    height: 1.563rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    margin-right: 0.75rem;
    box-sizing: border-box;
    position: relative;
  }

  span::after {
    content: "✓";
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
  }

  label {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
  }

  input[type="checkbox"]:checked + label span {
    background: rgb(245, 124, 0);
    border: none;
  }

  input[type="checkbox"]:checked + label span::after {
    display: block;
  }
`;

export default StyledCheckbox;
