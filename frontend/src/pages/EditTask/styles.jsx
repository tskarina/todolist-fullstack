import styled from "styled-components";
import fechar from "../../images/fechar.png";

export const NewPageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const NewPageContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: rgb(24, 24, 28);
  box-shadow: 1px 1px 20px 5px rgba(31, 30, 30, 0.5);
  border-radius: 10px;
  padding: 20px;
`;

export const NewPageTitle = styled.h2`
  color: #dbdbdb;
  font-size: 24px;
  font-family: "Roboto";
  margin-bottom: 30px;
`;

export const NewPageLabel = styled.label`
  font-family: "Roboto";
  color: #dbdbdb;
  display: flex;
  justify-content: start;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const NewPageInput = styled.input`
  background-color: #ac859b;
  width: calc(100% - 40px);
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #080808;
`;

export const NewPageSubmitButton = styled.button`
  background-color: #0c0008;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  color: #e9e9e9;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #8b3965;
    transform: translate(2px, 2px);
    box-shadow: 5px 5px 8px rgba(99, 31, 96, 0.2);
  }
`;

export const NewPageCloseButton = styled.button`
  background-image: url(${fechar});
  width: 18px;
  height: 18px;
  background-size: contain;
  border: none;
  border-radius: 5px;
  background-color: #4e4a4d;
  position: absolute; /* Define a posição absoluta */
  top: 10; /* Posiciona no topo */
  right: 15px; /* Posiciona à direita */

  &:hover {
    background-color: #8b3965;
    transform: translate(2px, 2px);
    box-shadow: 5px 5px 8px rgba(99, 31, 96, 0.2);
  }
`;

export const NewPageTextArea = styled.textarea`
  background-color: #ac859b;
  width: calc(100% - 40px);
  height: 100px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #080808;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
`;

export const DateAndTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const DateAndTimeInputContainer = styled.div`
  width: 48%;
`;

export const TimeInput = styled.input`
  background-color: #ac859b;
  width: calc(90% - 20px);
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #080808;
`;

export const DateInput = styled.input`
  background-color: #ac859b;
  width: calc(90% - 20px);
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  color: #080808;
`;
