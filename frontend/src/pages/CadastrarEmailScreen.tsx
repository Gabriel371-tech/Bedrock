import React, { useEffect, useState } from "react";
import fundo from "../assets/degrade-fundo-azul.jpg";
import { Link } from "react-router-dom";

export default function CadastrarNomeScreen() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    document.title = "Crie uma conta Bedrock";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nome:", nome);
  };

  const handleGoogle = () => console.log("Google signup");
  const handleFacebook = () => console.log("Facebook signup");

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-center bg-cover relative px-4"
      style={{ backgroundImage: `url(${fundo})` }}
      aria-labelledby="titulo-criar-conta"
    >
      {/* overlay para contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-black/20" />

  <section className="relative z-10 w-full max-w-sm">
        <div className="card bg-white/95 shadow-2xl rounded-none overflow-hidden">
          <div className="card-body p-6 sm:p-8">
            <h1 id="titulo-criar-conta" className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">
              Crie uma conta
            </h1>

            <p className="text-sm text-gray-600 text-center mt-1">
              Digite seu email para começar rapido e facil.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <label className="w-full">
                <span className="label-text text-sm text-gray-700">Digite seu email</span>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: Gabriel Leonardo"
                  className="input input-bordered w-full mt-1"
                  required
                  aria-label="Nome completo"
                />
              </label>

              <Link
                to="/CadastrarEmailScreen"
                type="submit"
                className="btn btn-primary btn-block btn-sm bg-[#1877F2] text-white font-bold"
                aria-label="Avançar"
              >
                Avançar
              </Link>
            </form>

          
          </div>
        </div>
      </section>
    </main>
  );
}
