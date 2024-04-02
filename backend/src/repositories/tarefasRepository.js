import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tarefasRepository = {
  insert: async (title, description, completed, deadline) => {
    const tarefa = await prisma.tarefa.create({
      data: { title, description, completed, deadline: new Date(deadline) },
    });
    return tarefa;
  },
  findAll: async () => {
    try {
      const tarefas = await prisma.tarefa.findMany();
      return tarefas;
    } catch (error) {
      throw new Error("Erro ao buscar todas as tarefas");
    }
  },
  findById: async (id) => {
    try {
      const tarefa = await prisma.tarefa.findUnique({
        where: { id: parseInt(id) },
      });
      return tarefa;
    } catch (error) {
      throw new Error("Erro ao buscar a tarefa selecionada");
    }
  },
  updateById: async (id, title, description) => {
    try {
      const tarefa = await prisma.tarefa.update({
        where: { id: parseInt(id) },
        data: { title: title, description: description },
      });
      return tarefa;
    } catch (error) {
      throw new Error("Erro ao atualizar a tarefa selecionada");
    }
  },

  deleteById: async (id) => {
    try {
      const tarefa = await prisma.tarefa.delete({
        where: { id: parseInt(id) },
      });
      return tarefa;
    } catch (error) {
      throw new Error("Erro ao deletar a tarefa selecionada");
    }
  },
};

export default tarefasRepository;
