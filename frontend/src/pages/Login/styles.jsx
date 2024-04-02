import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(130, 53, 124, 1) 0%,
    #c55d5d 47%,
    rgba(38, 16, 91, 1) 100%
  );
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */

  @media screen and (max-width: 400px) {
    padding: 10px; /* Adicionando algum espaço interno para telas menores */
  }
`;

export const SectionContainer = styled.div`
  width: 60%;
  height: 75%;
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  border: 1px solid rgba(177, 172, 172, 0.2);
  background-color: transparent;
  backdrop-filter: blur(150px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  padding: 50px 50px;

  @media screen and (max-width: 400px) {
    width: 90%; /* Reduzindo a largura para telas menores */
    height: 60%; /* Ajustando a altura automaticamente */
    padding: 20px; /* Reduzindo o espaço interno para telas menores */
    margin-right: 20px;
  }
`;

export const FormContainer = styled.div`
  width: 320px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  backdrop-filter: blur(80px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 40px;
  z-index: 1; /* Para garantir que o formulário esteja acima do background */

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 80%;
    padding: 20px;
  }
`;

export const FormTitle = styled.h1`
  color: #fff;
  font-size: 35px;
  font-family: "Roboto";
  text-align: center;

  @media screen and (max-width: 400px) {
    font-size: 25px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 98%;
  height: 50px;
  margin: 30px 0;

  @media screen and (max-width: 400px) {
    height: 40px;
    margin: 25px 0;
  }
`;

export const InputLogin = styled.input`
  width: 98%;
  height: 90%;
  background-color: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  color: #c4c4c4;
  padding-left: 10px;
  font-family: "Roboto";
  font-size: 12px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin: -15px 0 15px;
  }
`;

export const LabelCheckBox = styled.div`
  color: #fff;
`;

export const InputCheckBox = styled.input`
  accent-color: #fff;
  margin-right: 4px;
`;

export const LinkForgot = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 4px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin: 5.5px;
  }
`;

export const LinkRegister = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14.5px;
  font-weight: bold;
  font-family: "Roboto";
  margin: 20px 0 15px;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 45px;
  background-color: #ffff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 700;
  color: #333;

  &:active {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    height: 30px;
    font-size: 14px;
  }
`;

export const SignUpContainer = styled.p`
  color: #fff;
  font-size: 14.5px;
  font-family: "Roboto";
  margin-top: 20px;

  @media screen and (max-width: 400px) {
    font-size: 13px;
    margin-top: 10px;
  }
`;
