import styled from "styled-components";

const StyledListItem = styled.li`
  width: 100%;
  margin-bottom: 0.75rem;
  height: 50px;
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  transition: all 0.4;
  cursor: default;

  &.active {
    height: auto;
  }

  p {
    width: 100%;
    padding: 1.2rem 0 1rem 1.5rem;
    box-sizing: border-box;
  }

  p:first-of-type {
    position: relative;
    background: #fff;

    span {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.6rem;
      height: 100%;
      width: 3rem;
      background: ${(props) => (props.$isExpand ? "rgb(245, 124, 0)" : "#fff")};
      text-align: center;
      line-height: 3rem;
      cursor: pointer;

      &:hover {
        background: rgb(245, 124, 0);
      }
    }
  }

  p:last-of-type {
    padding-left: 2.7rem;
  }
`;

export default StyledListItem;
