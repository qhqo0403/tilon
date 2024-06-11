import React from "react";

import Backdrop from "./styles/Modal.styles";
import CustomButton from "./CustomButton";

const Modal = ({ closeModal, termsData }) => {
  const handleClose = () => {
    closeModal(false);
  };

  return (
    <Backdrop>
      <div>
        <h4>이용약관 동의</h4>
        <pre>{termsData}</pre>
        <CustomButton onClick={handleClose}>닫기</CustomButton>
      </div>
    </Backdrop>
  );
};

export default Modal;
