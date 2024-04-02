import { tarefasService } from "../services/tarefasService.js";

const tarefaController = {
  insert: async (req, res) => {
    const { title, description, completed, deadline } = req.body;
    try {
      const novaTarefa = await tarefasService.insert(
        title,
        description,
        completed,
        deadline
      );
      return res.json(novaTarefa);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  findAll: async (req, res) => {
    try {
      const todasTarefas = await tarefasService.findAll();
      return res.json(todasTarefas);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const tarefaId = await tarefasService.findById(id);
      if (!tarefaId) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      return res.json(tarefaId);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  updateById: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const tarefaAtualizada = await tarefasService.updateById(
        id,
        title,
        description
      );
      return res.json(tarefaAtualizada);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      await tarefasService.deleteById(id);
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

export default tarefaController;
