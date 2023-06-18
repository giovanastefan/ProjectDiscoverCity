import styled from "styled-components";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
`;

const Option = styled.option``;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export { FormWrapper, FormContainer, Input, Select, Option, Button };
