import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 4.375rem;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1000;

  div {
    margin: 0 auto;
    width: 84rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      a {
        display: block;
        width: 12rem;

        img {
          width: 100%;
          height: auto;
          cursor: pointer;
        }
      }
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      a {
        transition: all 0.3s;

        &:hover {
          color: rgb(245, 98, 0);
        }
      }

      a.userId {
        display: flex;
        align-items: center;

        img {
          width: 2rem;
          height: 2rem;
          margin-right: 0.5rem;
        }

        span {
          font-size: 0.875rem;
        }
      }
    }
  }
`;

export default StyledHeader;
