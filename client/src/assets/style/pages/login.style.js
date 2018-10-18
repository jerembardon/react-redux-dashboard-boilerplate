import styled from "styled-components";

export const LoginStyleContainer = styled.div`
  height: 100vh;
  background: #edf1f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    width: 50px;
    margin: 0 auto;
    display: block;
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    background-color: #ffffff;
  }
`;

export const FormStyleContainer = styled.form`
  width: 440px;
  max-width: 440px;
  margin: 0 auto;
  margin-top: 8px;
  background-color: #ffffff;
  border-radius: 4px;
  button {
    width: 100%;
    margin-top: 32px;
    border-radius: 0;
    padding: 16px 0;
  }

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const FormHeader = styled.div`
  position: relative;
  h1 {
    font-size: 1.4em;
    color: #222222;
    text-align: center;
    padding: 24px 0;
    margin-bottom: 24px;

    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 70px;
      background-color: #222;
      bottom: 0;
      left: calc(50% - 35px);
    }
  }
`;
