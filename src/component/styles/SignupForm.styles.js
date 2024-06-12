import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;

  div.checkboxWrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 0.875rem;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default StyledForm;
