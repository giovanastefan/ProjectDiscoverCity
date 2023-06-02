import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #003d53;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;


export const RegisterContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;

  form {
    width: 100%;
  }

  .title {
    padding: 16px;
    font-size: 24px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .register-button {
    cursor: pointer;
  }

  button {
    margin: 12px;
  }
`;

