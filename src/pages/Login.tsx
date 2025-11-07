import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import fundo from '../assets/degrade-fundo-azul.jpg';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    document.title = "Entrar ÔÇö Bedrock";
  }, []);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", senha);
    
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    // Aqui voc´┐¢ integraria a API do Google
  };

  const handleFacebookLogin = () => {
    console.log("Login com Facebook");
    // Aqui voc´┐¢ integraria a API do Facebook
  };



  return (
    <main
      className="min-h-screen flex items-center justify-center bg-center bg-cover relative px-4"
      style={{ backgroundImage: `url(${fundo})` }}
      aria-labelledby="titulo-entrar"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-blue-900/20 to-black/20" />

      <section className="relative z-10 w-full max-w-sm">
        <div className="card bg-white/95 shadow-2xl rounded-none overflow-hidden">
          <div className="card-body p-4 sm:p-6">
            <h1 id="titulo-entrar" className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              Entrar
            </h1>

            <p className="text-sm text-gray-600 text-center mt-0">Faça login com seu email ou use uma conta social.</p>

            <form onSubmit={handleLogin} className="mt-3 space-y-3">
              <label className="w-full">
                <span className="label-text text-sm text-gray-700">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu email"
                  className="input input-bordered input-sm w-full mt-0"
                  required
                />
              </label>

              <label className="w-full">
                <span className="label-text text-sm text-gray-700">Senha</span>
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Digite sua senha"
                  className="input input-bordered input-sm w-full mt-0"
                  required
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary bg-[#1877F2] text-white font-bold btn-block btn-sm"
              >
                Entrar
              </button>
            </form>

            <div className="divider my-3">ou</div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline bg-white border border-gray-200 btn-circle w-10 h-10 flex items-center justify-center"
                aria-label="Continuar com Google"
                title="Continuar com Google"
              >
                <FcGoogle size={20} />
              </button>

              <button
                onClick={handleFacebookLogin}
                className="btn btn-circle w-10 h-10 flex items-center justify-center bg-[#1877F2] text-white border-0"
                aria-label="Continuar com Facebook"
                title="Continuar com Facebook"
              >
                <FaFacebook size={18} className="text-white" />
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-3">
              Não tem conta?{" "}
              <Link to="/CadastrarNomeScreen" className="font-medium text-blue-600 hover:underline">
                Crie uma
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
