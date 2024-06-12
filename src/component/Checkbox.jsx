import React from "react";

import StyledCheckbox from "./styles/Checkbox.styles";

const Checkbox = ({ value, children }) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" id={value} />
      <label htmlFor={value}>
        <span /> {children}
      </label>
    </StyledCheckbox>
  );
};

export default Checkbox;
