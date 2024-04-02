import { Router } from "express";
import authController from "../controllers/authController.js";

const router = Router();

// Rota para o endpoint de login
router.post("/login", authController.login);

export default router;
