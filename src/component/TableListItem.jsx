import React from "react";

import StyledTr from "./styles/TableListItem.styles";

const TableListItem = ({ meetingData }) => {
  return (
    <StyledTr>
      <td>{meetingData.id}</td>
      <td>{meetingData.title}</td>
      <td>{meetingData.date}</td>
      <td>
        <button>시작</button>
        <button>초대</button>
        <button>편집</button>
        <button>삭제</button>
      </td>
    </StyledTr>
  );
};

export default TableListItem;
