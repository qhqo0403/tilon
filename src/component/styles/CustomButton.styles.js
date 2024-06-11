import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  height: 3.2rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.4s;
  margin-bottom: ${(props) => props.$mb || 0}rem;
`;

const ColoredBtn = styled(StyledBtn)`
  background: rgb(245, 124, 0);
  color: #fff;
  font-weight: bold;
  border: 0;

  &:hover {
    background: rgb(245, 98, 0);
  }
`;

const WhiteBtn = styled(StyledBtn)`
  border: 1px solid #ccc;
  background: #fff;

  &:hover {
    border-color: rgb(245, 124, 0);
    color: rgb(245, 124, 0);
    background: rgba(245, 124, 0, 0.1);
  }
`;

export { ColoredBtn, WhiteBtn };
