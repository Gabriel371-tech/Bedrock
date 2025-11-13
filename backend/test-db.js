// backend/test-db.js
import pool from "./src/db.js";

console.log("🟦 Iniciando teste do PostgreSQL...");

async function run() {
  try {
    console.log("⏳ Tentando conectar...");

    const result = await pool.query("SELECT NOW()");
    console.log("✅ Sucesso!");
    console.log("⏰ Horário:", result.rows[0].now);
  } catch (err) {
    console.error("❌ Erro na conexão:");
    console.error(err);
  } finally {
    console.log("🔚 Encerrando pool...");
    pool.end();
  }
}

run();
