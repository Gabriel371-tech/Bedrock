import React from "react";
import estudanteFlutuando from '../assets/estudante_flutuando_longe.gif';

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 bg-[#18396F]">
      {/* Lado Esquerdo - Textos */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-snug">
          Sistema com controle e <br />
          eficiência para <br />
          instituição acadêmica
        </h1>

        <p className="font-poppins text-white mt-6 text-lg md:text-xl max-w-lg">
          Conectando alunos, professores e a administração para um aprendizado
          de excelência. O futuro da gestão educacional, construído em
          colaboração.
        </p>

        <button className="mt-8 bg-white text-black font-poppins font-medium px-8 py-3 rounded-3xl shadow-md hover:scale-105 transition-transform">
          Começe agora
        </button>
      </div>

      {/* Lado Direito - Imagem */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
        src={estudanteFlutuando} 
        alt="Gestão acadêmica animada"
        className="w-72 md:w-80 lg:w-96 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
