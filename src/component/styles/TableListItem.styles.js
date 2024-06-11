import styled from "styled-components";

const StyledTr = styled.tr`
  td {
    border-bottom: 1px solid #ccc;
    background: #fff;
    padding: 1rem;
    text-align: center;

    button {
      width: 20%;
      height: 2rem;
      margin-right: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      font-size: 0.75rem;
      background: #fff;
      transition: all 0.4s;
      cursor: pointer;

      &:last-of-type {
        margin-right: 0;
      }

      &:hover {
        background: rgb(245, 124, 0);
        color: #fff;
      }
    }
  }
`;

export default StyledTr;
