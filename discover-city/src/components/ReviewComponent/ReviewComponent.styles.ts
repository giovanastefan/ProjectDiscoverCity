import styled from 'styled-components';

const StyledFormContainer = styled.div`
border: 1px solid black;
`;

const StyledHeading = styled.h5`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export { StyledTextarea, StyledButton, StyledFormContainer, StyledHeading, StyledForm, StyledLabel, StyledInput };