// src/screens/LoginScreen.tsx
import React, { useState, useEffect } from "react";
import fundo from "../assets/degrade-fundo-azul.jpg";
import { loginUser, } from "../services/api";
import type { LoginResponse } from "../services/api";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Entrar - Bedrock";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data: LoginResponse = await loginUser(email, senha);
      alert(`Bem-vindo, ${data.user.nome}!`);
      
      // Aqui você pode salvar o usuário no localStorage ou context, se quiser
      localStorage.setItem("user_email", data.user.email);
      localStorage.setItem("user_nome", data.user.nome);

      navigate("/dashboard"); // redireciona para a página principal
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
              Entrar
            </h1>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <label className="w-full">
                <span className="label-text text-sm text-gray-700">E-mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@email.com"
                  className="input input-bordered w-full mt-1"
                  required
                />
              </label>

              <label className="w-full">
                <span className="label-text text-sm text-gray-700">Senha</span>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="********"
                  className="input input-bordered w-full mt-1"
                  required
                />
              </label>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                className="btn btn-primary btn-block btn-sm bg-[#1877F2] text-white font-bold"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Não tem conta?{" "}
              <Link to="/CadastrarNomeScreen" className="link link-primary">
                Criar conta
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
