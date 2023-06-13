import styled from "styled-components";

export const Container = styled.div`
  background-color: #00131a;
  min-height: 100vh;
  padding-top: 12px;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;

  .input-group {
    width: 65%;
  }
`;


export const EstablishmentContainer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;

  .suggested {
    color: white;
  }
`;