import styled from "styled-components";
import deletar from "../../images/delete.png";
import concluir from "../../images/concluido.png";
import editar from "../../images/editar.png";
import pendente from "../../images/ampulheta.png";
import concluidas from "../../images/concluidas.png";
import todas from "../../images/todas.png";
import prioridade from "../../images/prioridade.png";
import logout from "../../images/logout.png";

export const Container = styled.div`
  background: linear-gradient(
    90deg,
    rgba(130, 53, 124, 1) 0%,
    rgba(159, 54, 54, 1) 47%,
    rgba(38, 16, 91, 1) 100%
  );
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ContentContainer = styled.div`
  background: rgb(22, 19, 21);
  width: 60%;
  height: 750px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 15px;
  box-shadow: 30px 40px 20px rgba(32, 32, 32, 0.5);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
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

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 1000px) {
    width: auto;
  }

  @media screen and (max-width: 880px) {
    width: auto;
  }

  @media screen and (max-width: 710px) {
    width: auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 410px) {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 82%;
  height: 550px;
  gap: 30px;
  margin-top: 20px;
  margin-left: 100px;

  @media screen and (max-width: 1200px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-left: 5px;
    width: 100%;
  }

  @media screen and (max-width: 410px) {
    grid-template-columns: 1fr;
    justify-content: center;
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #e05b83;
  font-family: "Roboto";
  width: 0;
  margin-left: 100px;
  margin-top: 30px;
  font-size: 50px;

  @media screen and (max-width: 1200px) {
    margin-left: 50px;
    font-size: 50px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 20px;
    font-size: 30px;
  }
`;

export const FilterSection = styled.div`
  background-color: rgb(24, 24, 28);
  border-radius: 15px;
  padding: 20px;
  position: relative;
  margin-left: 1%;

  @media screen and (max-width: 410px) {
    width: 100%;
  }
`;

export const TaskSection = styled.div`
  background-color: rgb(24, 24, 28);
  border-radius: 15px;
  padding: 20px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h1`
  color: rgb(196, 107, 166);
  padding: 10px;
  margin-top: 20px;
  margin-left: 0px;
  text-align: justify;
  font-family: "Roboto";
  font-size: 20px;

  @media screen and (max-width: 600px) {
    font-size: 25px;
    text-align: center;
  }
`;

export const InputCenter = styled.div`
  display: inline-block;
  margin-top: 40px;
  margin-left: -240px;
`;

export const InputSectionContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #803179 0%, #c05b8e 47%, #ca75a4 100%);
  border-radius: 30px;
  border: none;
  width: 120px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.2);
  transform: translate(0, 0);
  transition: transform 0.3s ease;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #dfdfdf;
  font-family: "Roboto";
  font-size: 13px;
  font-weight: bold;

  &:hover {
    background-color: #fdfdfd;
    transform: translate(2px, 2px);
    box-shadow: 5px 5px 8px rgba(99, 31, 96, 0.2);
  }

  &:active {
    background-color: #401f41;
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    position: relative;
    bottom: auto;
    bottom: calc(21% - 40px);
    left: calc(60% - 60px);
    width: 65px;
  }
`;

export const TextButton = styled.p`
  color: #dfdfdf;
  font-family: "Roboto";
  font-size: 13px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const TaskTitle = styled.p`
  display: flex;
  justify-content: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  cursor: pointer;
  &:hover {
    color: #d32f89;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 10px;
  color: #ebebeb;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: bold;
`;

export const TaskListItem = styled.div`
  margin-bottom: 10px;
  padding: 2px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #723a54;
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
    align-items: center;
    gap: 2px;
    background-color: #1f1f1f;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (max-width: 410px) {
    margin-bottom: 20px;
  }
`;

export const DeleteButton = styled.button`
  background-image: url(${deletar});
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const EditButton = styled.button`
  background-image: url(${editar});
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const DoneButton = styled.button`
  background-image: url(${concluir});
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const ButtonFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ButtonFilter = styled.button`
  color: #c0c0c0;
  background-color: transparent;
  align-items: center;
  display: flex;
  gap: 5px;
  width: 100%;
  justify-content: start;
  border: none;
  padding: 8px 10px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  font-family: "Roboto";
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #723a54;
  }

  &.active {
    background-color: #262531;
  }

  @media screen and (max-width: 600px) {
    justify-content: center;
    width: 100%;
    background-color: #1f1f1f;
    font-size: 15px;
    border-radius: 15px;
  }
`;

export const ButtonLogout = styled.button`
  background-image: url(${logout});
  background-color: transparent;
  width: 45px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 30px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  &:active {
    background-color: #401f41;
    transform: translate(1px, 1px);
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    top: 35px;
    right: 20px;
    width: 42px;
  }
`;

export const IconFilterPending = styled.span`
  background-image: url(${pendente});
  width: 18px;
  height: 18px;
  background-size: contain;
`;
export const IconFilterPriority = styled.span`
  background-image: url(${prioridade});
  width: 18px;
  height: 18px;
  background-size: contain;
`;
export const IconFilterAll = styled.span`
  background-image: url(${todas});
  width: 18px;
  height: 18px;
  background-size: contain;
`;
export const IconFilterCompleted = styled.span`
  background-image: url(${concluidas});
  width: 18px;
  height: 18px;
  background-size: contain;
`;
