import styled from "styled-components";

export const LoginStyleContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to left bottom, #0095ff, #74fac9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 1.2em;
    font-weight: 200;
    color: #ffffff;
    text-align: center;
    margin-top: 16px;
  }
  img {
    width: 50px;
    margin: 0 auto;
    display: block;
  }
`;

export const FormStyleContainer = styled.form`
  width: 450px;
  margin: 0 auto;
  padding: 32px;
  border-radius: 4px;
  margin-top: 8px;
`;
