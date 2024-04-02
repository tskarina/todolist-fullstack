import { tarefasRepository } from "../repositories/tarefasRepository.js";

export const tarefasService = {
  insert: async (title, description, completed, deadline) => {
    return await tarefasRepository.insert(
      title,
      description,
      completed,
      deadline
    );
  },
  findAll: async () => {
    return await tarefasRepository.findAll();
  },
  findById: async (id) => {
    return await tarefasRepository.findById(id);
  },
  updateById: async (id, title, description) => {
    return await tarefasRepository.updateById(id, title, description);
  },
  deleteById: async (id) => {
    return await tarefasRepository.deleteById(id);
  },
};

export default tarefasService;
