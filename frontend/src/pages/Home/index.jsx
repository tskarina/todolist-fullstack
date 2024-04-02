import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  ContentContainer,
  SectionContainer,
  FilterSection,
  TaskSection,
  ButtonLogout,
  Title,
  Button,
  TextButton,
  Subtitle,
  TaskList,
  TaskListItem,
  TaskTitle,
  ButtonList,
  ButtonFilterWrapper,
  DeleteButton,
  EditButton,
  DoneButton,
  ButtonFilter,
  IconFilterAll,
  IconFilterPending,
  IconFilterCompleted,
  IconFilterPriority,
} from "./styles";
import { NewTaskForm } from "./../NewTaskForm/index";
import { EditTask } from "./../EditTask/index";
import { Pagination } from "./../../components/Pagination";
import { TaskModal } from "./../TaskModal/index";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [tarefas, setTarefas] = useState([]);
  const [showNewPage, setShowNewPage] = useState(false);
  const [showEditPage, setShowEditPage] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(6);
  const [filtro, setFiltro] = useState("Todas");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const filtrarTarefas = () => {
    switch (filtro) {
      case "Pendentes":
        return tarefas.filter((tarefa) => !tarefa.completed);
      case "Prioridade":
        return tarefas.sort((a, b) => {
          const dataA = new Date(a.deadline).getTime();
          const dataB = new Date(b.deadline).getTime();
          return dataA - dataB;
        });
      case "Concluídas":
        return tarefas.filter((tarefa) => tarefa.completed);
      default:
        return tarefas;
    }
  };

  useEffect(() => {
    carregarTarefas();
  }, []);

  const handleOpenNewPage = () => {
    setShowNewPage(true);
    setShowEditPage(false);
  };

  const handleCloseNewPage = () => {
    setShowNewPage(false);
    setShowEditPage(false);
  };

  const handleOpenEditPage = (tarefa) => {
    setTarefaSelecionada(tarefa);
    setShowEditPage(true);
    setShowNewPage(false);
  };

  const handleTaskClick = (tarefa) => {
    setSelectedTask(tarefa);
    setIsModalOpen(true);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filtrarTarefas().slice(
    indexOfFirstTask,
    indexOfLastTask
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const carregarTarefas = async () => {
    try {
      const response = await axios.get(
        "https://todolist-backend-bci8.onrender.com/tarefas"
      );
      setTarefas(response.data);
    } catch (err) {
      console.error("Erro ao carregar as tarefas:", err);
    }
  };

  const adicionarTarefa = async (novaTarefa) => {
    try {
      const response = await axios.post(
        "https://todolist-backend-bci8.onrender.com/tarefas",
        novaTarefa
      );
      setTarefas([...tarefas, response.data]);
      setShowNewPage(false);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const editarTarefa = async (tarefaEditada) => {
    try {
      const response = await axios.put(
        `https://todolist-backend-bci8.onrender.com/tarefas/${tarefaEditada.id}`,
        tarefaEditada
      );
      const tarefasAtualizadas = tarefas.map((tarefa) => {
        if (tarefa.id === tarefaEditada.id) {
          return response.data;
        }
        return tarefa;
      });
      setTarefas(tarefasAtualizadas);
      setShowEditPage(false);
      setTarefaSelecionada(null);
    } catch (error) {
      console.error("Erro ao editar tarefa:", error);
    }
  };

  const excluirTarefa = async (id) => {
    try {
      await axios.delete(
        `https://todolist-backend-bci8.onrender.com/tarefas/${id}`
      );
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
    }
  };

  const marcarComoRealizada = async (id) => {
    try {
      await axios.put(
        `https://todolist-backend-bci8.onrender.com/tarefas/${id}`,
        {
          completed: true,
        }
      );
      const tarefasAtualizadas = tarefas.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, completed: true };
        }
        return tarefa;
      });
      setTarefas(tarefasAtualizadas);
    } catch (error) {
      console.error("Erro ao marcar tarefa como realizada:", error);
    }
  };

  return (
    <Container>
      <ContentContainer>
        <Title>TSK</Title>
        <SectionContainer>
          <FilterSection>
            <Subtitle>Filtros</Subtitle>

            <ButtonFilterWrapper>
              <ButtonFilter onClick={() => setFiltro("Todas")}>
                <IconFilterAll /> Todas
              </ButtonFilter>
              <ButtonFilter onClick={() => setFiltro("Pendentes")}>
                <IconFilterPending /> Pendentes
              </ButtonFilter>
              <ButtonFilter onClick={() => setFiltro("Prioridade")}>
                <IconFilterPriority /> Prioridade
              </ButtonFilter>
              <ButtonFilter onClick={() => setFiltro("Concluídas")}>
                <IconFilterCompleted /> Concluídas
              </ButtonFilter>
            </ButtonFilterWrapper>
          </FilterSection>
          <TaskSection>
            <Subtitle>Tarefas</Subtitle>
            <TaskList>
              {currentTasks.map((tarefa) => (
                <TaskListItem key={tarefa.id}>
                  <TaskTitle onClick={() => handleTaskClick(tarefa)}>
                    {tarefa.title.length > 15
                      ? tarefa.title.slice(0, 15) + "..."
                      : tarefa.title}
                  </TaskTitle>
                  <p>{tarefa.completed ? "Concluída" : "Pendente"}</p>
                  <p>
                    {`${new Date(tarefa.deadline).getUTCDate()}/${
                      new Date(tarefa.deadline).getUTCMonth() + 1
                    }/${new Date(tarefa.deadline).getUTCFullYear()}`}
                  </p>
                  <ButtonList>
                    <DeleteButton
                      onClick={(e) => {
                        e.stopPropagation();
                        excluirTarefa(tarefa.id);
                      }}
                    />
                    <EditButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEditPage(tarefa);
                      }}
                    />
                    <DoneButton
                      onClick={(e) => {
                        e.stopPropagation();
                        marcarComoRealizada(tarefa.id);
                      }}
                    />
                  </ButtonList>
                </TaskListItem>
              ))}
            </TaskList>
            <Pagination
              tasksPerPage={tasksPerPage}
              totalTasks={filtrarTarefas().length}
              currentPage={currentPage}
              paginate={paginate}
            />

            <Button onClick={handleOpenNewPage}>
              <TextButton>ADICIONAR</TextButton>
            </Button>
            <ButtonLogout onClick={handleLogout}></ButtonLogout>
          </TaskSection>
        </SectionContainer>
      </ContentContainer>

      {showNewPage && (
        <NewTaskForm
          showNewPage={showNewPage}
          onClose={handleCloseNewPage}
          adicionarTarefa={adicionarTarefa}
        />
      )}

      {showEditPage && (
        <EditTask
          tarefaSelecionada={tarefaSelecionada}
          editarTarefa={editarTarefa}
          onClose={handleCloseNewPage}
        />
      )}

      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          task={selectedTask}
        />
      )}
    </Container>
  );
};
