import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  font-size: 0.875rem;

  div.timeWrapper {
    width: 100%;
    margin-bottom: 1.5rem;

    div {
      width: 100%;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;

      input {
        width: 38%;
        height: 2.5rem;
        border: 1px solid #ccc;
        border-radius: 0.3rem;
        margin-left: auto;
        padding-left: 0.875rem;
      }

      span {
        margin-right: 0.875rem;
      }
    }
  }

  p {
    margin-bottom: 1.5rem;
    cursor: pointer;

    &:hover {
      color: rgb(245, 124, 0);
    }
  }
`;

export default StyledForm;
