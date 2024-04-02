import React, { useState } from "react";
import {
  NewPageContent,
  NewPageOverlay,
  NewPageTitle,
  NewPageInput,
  NewPageLabel,
  NewPageCloseButton,
  NewPageSubmitButton,
  NewPageTextArea,
  DateAndTimeContainer,
  DateAndTimeInputContainer,
  TimeInput,
  DateInput,
} from "./styles";

export const EditTask = ({ tarefaSelecionada, editarTarefa, onClose }) => {
  const [date, setDate] = useState(tarefaSelecionada.deadline);
  const [title, setTitle] = useState(tarefaSelecionada.title);
  const [description, setDescription] = useState(
    tarefaSelecionada.description || ""
  );
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    editarTarefa({
      ...tarefaSelecionada,
      title,
      description,
      deadline: date,
    });
    onClose();
  };

  return (
    <NewPageOverlay>
      <NewPageContent>
        <NewPageCloseButton onClick={onClose} />
        <NewPageTitle>Editar Tarefa</NewPageTitle>
        <NewPageLabel>Título</NewPageLabel>
        <NewPageInput
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <DateAndTimeContainer>
          <DateAndTimeInputContainer>
            <NewPageLabel>Horário</NewPageLabel>
            <TimeInput
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
          </DateAndTimeInputContainer>
          <DateAndTimeInputContainer>
            <NewPageLabel>Data</NewPageLabel>
            <DateInput
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </DateAndTimeInputContainer>
        </DateAndTimeContainer>
        <NewPageLabel>Descrição</NewPageLabel>
        <NewPageTextArea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          rows={6}
        />
        <NewPageSubmitButton onClick={handleSubmit}>
          Concluir
        </NewPageSubmitButton>
      </NewPageContent>
    </NewPageOverlay>
  );
};
