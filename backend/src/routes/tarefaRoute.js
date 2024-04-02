import { Router } from "express";
import tarefaController from "./../controllers/tarefaController.js";
const route = Router();

route.post("/tarefas", tarefaController.insert);
route.get("/tarefas", tarefaController.findAll);
route.get("/tarefas/:id", tarefaController.findById);
route.put("/tarefas/:id", tarefaController.updateById);
route.delete("/tarefas/:id", tarefaController.deleteById);

export default route;
