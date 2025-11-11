import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#18396F] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Logo</div>

        {/* Links  */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white font-semibold hover:text-blue-600">
            Produtos
          </a>
          <a href="#" className="text-white font-semibold hover:text-blue-600">
            Planos
          </a>
          <a href="#" className="text-white font-semibold hover:text-blue-600">
            Soluções
          </a>
          <a href="#" className="text-white font-semibold hover:text-blue-600">
            Sobre Nós
          </a>
          <Link  to="/login" className="px-6 py-1 rounded-3xl bg-white text-black font-semibold hover:bg-blue-700 transition">
            Entrar
          </Link>
        </div>

        {/* Botão menu mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Produtos
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Planos
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Soluções
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Sobre Nós
          </a>
          <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
            Entrar
          </button>
        </div>
      )}
    </nav>
  );
}

