import React from "react";

import { ColoredBtn, WhiteBtn } from "./styles/CustomButton.styles";

const CustomButton = ({ type, children, mb, onClick, colored = false }) => {
  if (colored) {
    return (
      <ColoredBtn type={type} $mb={mb} onClick={onClick}>
        {children}
      </ColoredBtn>
    );
  } else {
    return (
      <WhiteBtn type={type} $mb={mb} onClick={onClick}>
        {children}
      </WhiteBtn>
    );
  }
};

export default CustomButton;
