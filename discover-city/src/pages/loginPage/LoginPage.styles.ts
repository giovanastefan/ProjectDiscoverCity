import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #ffff99;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .title {
    padding: 16px;
    font-size: 24px;
  }

  button {
    background-color: #ffd11a;
    border-color: #ffcc00;
    width: 100px;
    margin: 6px;
  }

  button:hover {
    background-color: #ffcc00;
    border-color: #ffcc00;
  }

  input:focus {
    border: 1px #ffcc00;
    box-shadow: 4px 4px #ffcc00;
  }
`;
