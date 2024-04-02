import express from "express";
import cors from "cors";
import tarefaRoute from "./routes/tarefaRoute.js";
import authRoute from "./routes/authRoute.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(tarefaRoute, authRoute);

server.listen(3001, () => {
  console.log("API Started!");
});
