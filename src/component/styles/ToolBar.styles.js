import styled from "styled-components";

const ToolWrapper = styled.div`
  div.toolInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    input,
    select {
      width: 60%;
      height: 2.5rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      padding-left: 0.875rem;
      box-sizing: border-box;
    }
  }

  p {
    text-align: left;
    font-size: 1rem;
    margin-bottom: 2rem;

    span {
      font-size: 0.75rem;
      color: #999;
    }
  }

  div.toolCheckbox {
    display: flex;
    flex-wrap: wrap;

    div {
      width: 25%;
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default ToolWrapper;
