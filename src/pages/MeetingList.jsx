import React, { useState } from "react";

import MeetingWrapper from "./styles/MeetingList.styles";
import MeetingTable from "../component/MeetingTable";

const myMeeting = [
  {
    id: 401,
    title: "연구소 주간 회의",
    date: "2024. 6. 4. 오후 3:22:44 ~ 2024. 6. 11. 오후 3:22:44",
  },
  {
    id: 426,
    title: "kmlee의 초대방",
    date: "2024. 6. 5. 오전 12:00:00 ~ 2024. 6. 5. 오후 11:59:59",
  },
];

const invitedMeeting = [
  {
    id: 415,
    title: "프론트 테스트",
    date: "2024. 6. 5. 오전 1:14:53 ~ 2024. 6. 5. 오전 1:14:53",
  },
  {
    id: 428,
    title: "틸론 테스트",
    date: "2024. 6. 5. 오전 10:35:09 ~ 2024. 6. 5. 오후 10:35:09",
  },
];

const MeetingList = () => {
  const [selectedData, setSelectedData] = useState(myMeeting);
  const [clickedMy, setClickedMy] = useState(true);
  const [clickedInvite, setClickedInvite] = useState(false);

  const handleClickTab = (e) => {
    let btnType = e.target.innerText;

    if (btnType === "내가 만든 방") {
      setSelectedData(myMeeting);
      setClickedMy(true);
      setClickedInvite(false);
    } else {
      setSelectedData(invitedMeeting);
      setClickedMy(false);
      setClickedInvite(true);
    }
  };

  return (
    <MeetingWrapper>
      <div className="innerbox">
        <h3>회의 목록</h3>
        <button
          className={clickedMy ? "tabBtn active" : "tabBtn"}
          onClick={handleClickTab}
        >
          내가 만든 방
        </button>
        <button
          className={clickedInvite ? "tabBtn active" : "tabBtn"}
          onClick={handleClickTab}
        >
          초대 받은 방
        </button>
        <MeetingTable
          meetingData={selectedData}
          clickedInvite={clickedInvite}
        />
      </div>
    </MeetingWrapper>
  );
};

export default MeetingList;
