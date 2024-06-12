import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  background: #f5f5f5;
  padding: 1.875rem 0;

  div.innerbox {
    width: 84rem;
    margin: 0 auto;
    display: flex;

    div.left {
      margin-right: 1.875rem;

      a {
        display: block;
        width: 9rem;

        img {
          width: 100%;
          height: auto;
        }
      }
    }

    div.right {
      ul {
        display: flex;
        margin-bottom: 0.5rem;

        li {
          margin-right: 0.3rem;

          &::after {
            content: "|";
            font-size: 0.875rem;
            position: relative;
            top: -0.125rem;
            margin-left: 0.3rem;
          }

          &:last-of-type::after {
            content: "";
          }
        }
      }
      address:first-of-type {
        margin-bottom: 0.2rem;
      }

      address:last-of-type {
        margin-bottom: 0.625rem;
      }
    }
  }
`;

export default StyledFooter;
