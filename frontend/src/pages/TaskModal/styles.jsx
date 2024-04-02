import styled from "styled-components";
import fechar from "../../images/fechar.png";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 300px;
  background: rgb(24, 24, 28);
  box-shadow: 1px 1px 20px 5px rgba(31, 30, 30, 0.5);
  border-radius: 10px;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
`;

export const ModalText = styled.h1`
  color: #f0f0f0;
  font-size: 22px;
  font-family: "Roboto";

  text-align: center;
`;

export const ModalTitle = styled.p`
  color: #0c0c0c;
  font-size: 16px;
  background-color: #a86791;
  border-radius: 5px;
  font-family: "Roboto";
  width: 80%;
  height: 20px;
  padding: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #2e2e2e;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5a5a5a;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #747474;
  }
`;

export const ModalDescription = styled.p`
  color: #080808;
  font-size: 14px;
  background-color: #a86791;
  border-radius: 5px;
  font-family: "Roboto";
  width: 80%;
  height: 100px;
  border: none;
  padding: 5px;
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #2e2e2e;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5a5a5a;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #747474;
  }
`;

export const CloseButton = styled.button`
  background-image: url(${fechar});
  width: 18px;
  height: 18px;
  background-size: contain;
  border: none;
  border-radius: 5px;
  background-color: #4e4a4d;
  position: absolute;
  top: 10;
  right: 15px;

  &:hover {
    background-color: #8b3965;
    transform: translate(2px, 2px);
    box-shadow: 5px 5px 8px rgba(99, 31, 96, 0.2);
  }

  @media screen and (max-width: 450px) {
    right: 20px;
    top: 15px;
  }
`;

export const ReadOnlyWrapper = styled.div`
  pointer-events: none;
  opacity: 0.5;
`;
