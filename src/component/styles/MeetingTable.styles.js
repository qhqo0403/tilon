import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-top: 2px solid #333;
  font-size: 0.875rem;
  margin-bottom: 1rem;

  th {
    padding: 1rem;
    background: rgb(225, 225, 225);
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button.newMeetingBtn {
    width: 7rem;
    height: 2.3rem;
    border: none;
    background: rgb(229, 229, 229);
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: rgb(245, 124, 0);
      color: #fff;
    }
  }
`;

export { StyledTable, BtnWrapper };
