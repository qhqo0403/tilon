import React from "react";

import ReservationWrapper from "./styles/Reservation.styles";
import ReservationForm from "../component/ReservationForm";

const Reservation = () => {
  return (
    <ReservationWrapper>
      <div className="innerbox">
        <h3>회의 예약</h3>
        <p className="text">
          회의를 시작하시려면 회의 예약을 통하여 진행이 가능합니다.
        </p>
        <ReservationForm />
      </div>
    </ReservationWrapper>
  );
};

export default Reservation;
