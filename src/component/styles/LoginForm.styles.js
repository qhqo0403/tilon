import styled from "styled-components";

const StyledLoginForm = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 3.125rem 2.5rem;
  background: #fff;

  form {
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

const InputField = styled.div`
  width: 100%;
  height: 3.2rem;
  position: relative;
  margin-bottom: 1.5rem;
  overflow: hidden;

  span {
    display: block;
    position: absolute;
    left: 0.875rem;
    top: ${(props) => (props.$isEntered ? "30%" : "50%")};
    transform: translateY(-50%);
    font-size: ${(props) => (props.$isEntered ? "0.75rem" : "0.875rem")};
    color: #999;
    transition: all 0.3s;
  }

  input {
    width: 100%;
    height: 100%;
    padding-left: 0.9rem;
    padding-top: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: rgb(245, 124, 0);
    }

    &:focus + span {
      color: rgb(245, 124, 0);
      font-size: 0.75rem;
      top: 30%;
    }
  }
`;

const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
`;

export { StyledLoginForm, InputField, CheckboxWrapper };
