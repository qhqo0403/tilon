import React, { useState } from "react";

import StyledForm from "./styles/ReservationForm.styles";
import CommonInput from "./CommonInput";
import ToolBar from "./ToolBar";
import CustomButton from "./CustomButton";

let today = new Date();

let hours = ("0" + today.getHours()).slice(-2);
let minutes = ("0" + today.getMinutes()).slice(-2);
let seconds = ("0" + today.getSeconds()).slice(-2);

let todayNow = hours + ":" + minutes + ":" + seconds;

const ReservationForm = () => {
  const [showToolBar, setShowToolBar] = useState(true);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().substring(0, 10)
  );
  const [startTime, setStartTime] = useState(todayNow);

  const handleShowToolBar = () => {
    setShowToolBar((prevState) => !prevState);
  };

  return (
    <StyledForm action="#" method="post">
      <CommonInput value="meeetingName" needText={false}>
        회의명
      </CommonInput>
      <CommonInput value="description" needText={false}>
        설명을 입력하세요.
      </CommonInput>
      <div className="timeWrapper">
        <div>
          <span>시작 시간</span>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
          />
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={startTime}
          />
        </div>
        <div>
          <span>종료 시간</span>
          <input type="date" id="endDate" name="endDate" value={startDate} />
          <input type="time" id="endTime" name="endTime" value={startTime} />
        </div>
      </div>
      <p onClick={handleShowToolBar}>상세 설정</p>
      {showToolBar && <ToolBar />}
      <CustomButton type="submit" mb={1.5} colored={true}>
        예약하기
      </CustomButton>
      <CustomButton type="reset">취소</CustomButton>
    </StyledForm>
  );
};

export default ReservationForm;
