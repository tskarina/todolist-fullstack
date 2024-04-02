import {
  ModalBackground,
  ModalContent,
  ModalText,
  ModalTitle,
  CloseButton,
  ModalDescription,
  ModalContainer,
} from "./styles";

export const TaskModal = ({ isOpen, onClose, task }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}></CloseButton>
        <ModalText>Visualizar Tarefa</ModalText>

        <ModalContainer>
          <ModalTitle>{task.title}</ModalTitle>
          <ModalDescription>{task.description}</ModalDescription>
        </ModalContainer>
      </ModalContent>
    </ModalBackground>
  );
};
