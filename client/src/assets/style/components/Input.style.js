import styled from "styled-components";

export const FieldSet = styled.fieldset`
  margin-bottom: 1em;
  label {
    margin-bottom: 0.5em;
    font-size: 0.9em;
    color: #ffffff;
  }
  input {
    border: 0;
    background-color: rgba(255, 255, 255, 0.5) !important;
    &::placeholder {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px white inset;
  }
`;
