import express from "express";
import bcrypt from "bcrypt";
import pool from "../db.js"; // conexão PostgreSQL

const router = express.Router();

// === CADASTRO ===
router.post("/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos." });
    }

    // Verificar se o email já existe
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: "Email já cadastrado." });
    }

    // Hash da senha
    const saltRounds = 10;
    const senha_hash = await bcrypt.hash(senha, saltRounds);

    // Inserir no banco
    const result = await pool.query(
      "INSERT INTO users (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id, nome, email",
      [nome, email, senha_hash]
    );

    const user = result.rows[0];
    res.status(201).json({ message: "Usuário cadastrado com sucesso!", user });
  } catch (err) {
    console.error("Erro no register:", err);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

// === LOGIN ===
router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) return res.status(400).json({ error: "Preencha todos os campos." });

    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Usuário não encontrado." });

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(senha, user.senha_hash);
    if (!validPassword) return res.status(401).json({ error: "Senha incorreta." });

    res.status(200).json({
      message: "Login realizado com sucesso!",
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

export default router;
