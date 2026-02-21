// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";

const JWT_SECRET = process.env.JWT_SECRET || "segredo_super_forte";

// =====================
// CRIAR USUÁRIO (CREATE)
// =====================
export async function cadastrar(req, res) {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha)
      return res.status(400).json({ error: "Preencha todos os campos." });

    const usuarioExistente = await pool.query(
      "SELECT * FROM users WHERE email = $1", [email]
    );

    if (usuarioExistente.rows.length > 0)
      return res.status(409).json({ error: "Email já cadastrado." });

    const senha_hash = await bcrypt.hash(senha, 10);

    const resultado = await pool.query(
      "INSERT INTO users (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email, role",
      [nome, email, senha_hash]
    );

    res.status(201).json({
      message: "Usuário cadastrado com sucesso!",
      usuario: resultado.rows[0],
    });
  } catch (err) {
    console.error("Erro ao cadastrar:", err);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
}

// =====================
// ENTRAR (LOGIN)
// =====================
export async function entrar(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha)
      return res.status(400).json({ error: "Preencha todos os campos." });

    const resultado = await pool.query(
      "SELECT * FROM users WHERE email = $1", [email]
    );

    if (resultado.rows.length === 0)
      return res.status(404).json({ error: "Usuário não encontrado." });

    const usuario = resultado.rows[0];

    const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaValida)
      return res.status(401).json({ error: "Senha incorreta." });

    const token = jwt.sign({ id: usuario.id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      message: "Login realizado com sucesso!",
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role,
      },
    });
  } catch (err) {
    console.error("Erro ao entrar:", err);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
}

// =====================
// BUSCAR USUÁRIO LOGADO (READ)
// =====================
export async function buscarUsuarioLogado(req, res) {
  try {
    const resultado = await pool.query(
      "SELECT id, nome, email, role FROM users WHERE id = $1", [req.userId]
    );

    if (resultado.rows.length === 0)
      return res.status(404).json({ error: "Usuário não encontrado." });

    res.json(resultado.rows[0]);
  } catch (err) {
    console.error("Erro ao buscar usuário:", err);
    res.status(500).json({ error: "Erro ao buscar usuário." });
  }
}

// =====================
// ATUALIZAR PERFIL (UPDATE)
// =====================
export async function atualizarPerfil(req, res) {
  try {
    const { role } = req.body;

    if (!["professor", "aluno", "empresa"].includes(role))
      return res.status(400).json({ error: "Tipo inválido." });

    await pool.query(
      "UPDATE users SET role = $1 WHERE id = $2", [role, req.userId]
    );

    res.json({ message: "Perfil atualizado com sucesso!" });
  } catch (err) {
    console.error("Erro ao atualizar perfil:", err);
    res.status(500).json({ error: "Erro ao atualizar perfil." });
  }
}

// =====================
// DELETAR USUÁRIO (DELETE)
// =====================
export async function deletarUsuario(req, res) {
  try {
    const resultado = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING id", [req.userId]
    );

    if (resultado.rows.length === 0)
      return res.status(404).json({ error: "Usuário não encontrado." });

    res.json({ message: "Usuário deletado com sucesso!" });
  } catch (err) {
    console.error("Erro ao deletar usuário:", err);
    res.status(500).json({ error: "Erro ao deletar usuário." });
  }
}