import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import fundo from '../assets/degrade-fundo-azul.jpg';
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    document.title = "Entrar — Bedrock";
  }, []);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Senha:", senha);
    
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google");
    // Aqui voc� integraria a API do Google
  };

  const handleFacebookLogin = () => {
    console.log("Login com Facebook");
    // Aqui voc� integraria a API do Facebook
  };



  return (
    <div className="flex min-h-screen items-center justify-center px-4"
   style={{ backgroundImage: `url(${fundo})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Logo ou t�tulo */}
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Entrar 
        </h1>

        {/* Formul�rio */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Senha */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Bot�o principal */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow-md transition hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">ou</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Login com Google e Facebook */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm transition hover:bg-gray-100"
          >
            <FcGoogle size={20} /> Continuar com Google
          </button>

          <button
            onClick={handleFacebookLogin}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-blue-800"
          >
            <FaFacebook size={20} /> Continuar com Facebook
          </button>
        </div>

        {/* Criar conta */}
        <Link to="/CadastrarNomeScreen" className="mt-6 text-center text-sm text-gray-600">
          Não tem conta?{" "}
          <a
            href="#"
            className="font-medium text-blue-600 hover:underline"
          >
            Crie uma
          </a>
        </Link>
      </div>
    </div>
  );
};
