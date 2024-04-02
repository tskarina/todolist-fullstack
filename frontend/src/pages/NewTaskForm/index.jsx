import React, { useState } from "react";
import {
  NewPageOverlay,
  NewPageContent,
  NewPageTitle,
  NewPageLabel,
  NewPageInput,
  NewPageCloseButton,
  NewPageSubmitButton,
  NewPageTextArea,
  DateAndTimeContainer,
  DateAndTimeInputContainer,
  TimeInput,
  DateInput,
} from "./styles";

export const NewTaskForm = ({
  showNewPage,
  adicionarTarefa,
  onClose,
  tarefaSelecionada,
  editarTarefa,
}) => {
  const [date, setDate] = useState(
    tarefaSelecionada ? tarefaSelecionada.deadline : ""
  );
  const [title, setTitle] = useState(
    tarefaSelecionada ? tarefaSelecionada.title : ""
  );
  const [description, setDescription] = useState(
    tarefaSelecionada ? tarefaSelecionada.description : ""
  );
  const [time, setTime] = useState("");

  const handleSubmit = () => {
    if (tarefaSelecionada) {
      editarTarefa({
        ...tarefaSelecionada,
        title,
        description,
        deadline: date,
      });
    } else {
      adicionarTarefa({
        title,
        description,
        deadline: date,
      });
    }
  };

  return (
    showNewPage && (
      <NewPageOverlay>
        <NewPageContent>
          <NewPageCloseButton onClick={onClose} />
          <NewPageTitle>
            {tarefaSelecionada ? "Editar tarefa" : "Criar uma nova tarefa"}
          </NewPageTitle>
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
    )
  );
};
