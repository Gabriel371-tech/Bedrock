// models/userModel.js
import pool from "../db.js";

export async function findByEmail(email) {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
}

export async function createUser(nome, email, senha_hash) {
  const result = await pool.query(
    "INSERT INTO users (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING *",
    [nome, email, senha_hash]
  );
  return result.rows[0];
}