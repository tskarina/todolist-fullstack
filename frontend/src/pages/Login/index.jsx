import React, { useState } from "react";
import axios from "axios"; // Certifique-se de instalar o axios: npm install axios
import { useNavigate } from "react-router-dom";

import {
  Container,
  SectionContainer,
  FormContainer,
  FormTitle,
  InputBox,
  InputWrapper,
  InputLogin,
  LabelCheckBox,
  InputCheckBox,
  LinkForgot,
  LinkRegister,
  ButtonSubmit,
  SignUpContainer,
} from "./styles";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://todolist-backend-bci8.onrender.com/login",
        {
          username,
          password,
        }
      );
      console.log("Token de acesso:", response.data.accessToken);
      navigate("/home");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <Container>
      <SectionContainer>
        <FormContainer onSubmit={handleLogin}>
          <FormTitle>Login</FormTitle>
          <InputBox>
            <InputLogin
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputBox>
          <InputBox>
            <InputLogin
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputBox>

          <InputWrapper>
            <LabelCheckBox>
              <InputCheckBox type="checkbox" />
              Mantenha-me conectado
            </LabelCheckBox>
            <LinkForgot href="#">Esqueci minha senha</LinkForgot>
          </InputWrapper>
          <ButtonSubmit onClick={handleLogin}>Login</ButtonSubmit>

          <SignUpContainer>
            Não possui conta? <LinkRegister href="#">Cadastre-se</LinkRegister>
          </SignUpContainer>
        </FormContainer>
      </SectionContainer>
    </Container>
  );
};
