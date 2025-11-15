// src/screens/CadastrarSenhaScreen.tsx
import React, { useState } from "react";
import fundo from "../assets/degrade-fundo-azul.jpg";
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CadastrarSenhaScreen() {
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const nome = localStorage.getItem("user_nome") || "";
      const email = localStorage.getItem("user_email") || "";

      if (!nome || !email) throw new Error("Dados incompletos.");

      const data = await registerUser(nome, email, senha);

      alert(data.message); // ✅ agora TypeScript entende que message existe

      // Redireciona para login
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-center bg-cover relative px-4"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-black/20" />

      <section className="relative z-10 w-full max-w-sm">
        <div className="card bg-white/95 shadow-2xl overflow-hidden">
          <div className="card-body p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
              Crie uma senha
            </h1>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <label className="floating-label">
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  className="input input-md"
                  required
                />
              </label>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="btn btn-primary btn-block btn-sm bg-[#1877F2] text-white font-bold"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Concluir cadastro"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
