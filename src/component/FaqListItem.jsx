import React, { useState } from "react";

import StyledListItem from "./styles/FaqListItem.styles";

const FaqListItem = ({ faqData, onClickList, clicked }) => {
  const { id, question, answer } = faqData;
  const [isExpand, setIsExpand] = useState(false);
  const isClicked = id === clicked;

  const handleClick = () => {
    if (isClicked) {
      onClickList(null);
      setIsExpand(false);
    } else {
      onClickList(id);
      setIsExpand((prevState) => !prevState);
    }
  };

  return (
    <StyledListItem
      onClick={handleClick}
      className={isExpand ? "active" : ""}
      $isExpand={isExpand}
    >
      <p>
        Q. {question}
        <span>∨</span>
      </p>
      <p>{answer}</p>
    </StyledListItem>
  );
};

export default FaqListItem;
