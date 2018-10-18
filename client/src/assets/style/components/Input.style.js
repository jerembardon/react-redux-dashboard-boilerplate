import styled from "styled-components";

export const FieldSet = styled.fieldset`
  width: 75%;
  margin: 0 auto;
  margin-bottom: 1em;
  label {
    margin-bottom: 0.5em;
    font-size: 0.9em;
    color: #222222;
  }

  input {
    border: 0;
    background-color: #edf1f2 !important;
    height: 48px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.6);
      font-size: 0.8em;
    }

    &:focus {
      border: 1px solid #0694fa;
      box-shadow: none;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #edf1f2 inset;
  }
`;
