// routes/auth.js
import express from "express";
import {
  cadastrar,
  entrar,
  buscarUsuarioLogado,
  atualizarPerfil,
  deletarUsuario,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/cadastrar", cadastrar);                                      // CREATE
router.post("/entrar", entrar);                                            // LOGIN
router.get("/eu", authMiddleware, buscarUsuarioLogado);                    // READ
router.put("/atualizar-perfil", authMiddleware, atualizarPerfil);         // UPDATE
router.delete("/deletar", authMiddleware, deletarUsuario);                 // DELETE

export default router;