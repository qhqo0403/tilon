import React from "react";

import { Link } from "react-router-dom";

import { StyledTable, BtnWrapper } from "./styles/MeetingTable.styles";
import TableListItem from "./TableListItem";

const MeetingTable = ({ meetingData, clickedInvite }) => {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th width="50">번호</th>
            <th width="150">회의명</th>
            <th width="400">일시</th>
            <th width="400"></th>
          </tr>
        </thead>
        <tbody>
          {meetingData.map((data) => (
            <TableListItem
              key={data.id + data.title}
              meetingData={data}
              invite={clickedInvite}
            />
          ))}
        </tbody>
      </StyledTable>
      <BtnWrapper>
        <Link to="/reservation">
          <button className="newMeetingBtn">새 회의</button>
        </Link>
      </BtnWrapper>
    </>
  );
};

export default MeetingTable;
