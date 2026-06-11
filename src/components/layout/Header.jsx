import Button from "../ui/Button";
import logo from "../../assets/imagens/logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white/10 backdrop-blur-md fixed top-0 left-0 w-full p-3 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 lg:px-2">
        <img className="w-26" src={logo} alt="World Connect" />

        <div className="flex items-center font-medium text-[#1D1D1D] gap-6">
          {/* Menu desktop */}
          <ul className="hidden lg:flex space-x-6">
            <li className="hover:text-[#79a73d]">
              <a href="#">Destinos</a>
            </li>
            <li className="hover:text-[#79a73d]">
              <a href="#">Como Funciona</a>
            </li>
            <li className="hover:text-[#79a73d]">
              <a href="#">Beneficios</a>
            </li>
            <li className="hover:text-[#79a73d]">
              <a href="#">Depoimentos</a>
            </li>
          </ul>
        </div>

        <Button className="text-white hidden lg:block">
          Fale com um especialista
        </Button>

        <button
          className="lg:hidden text-[#1D1D1D] text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </nav>

      {/* Menu mobile */}
      <ul
        className={`fixed top-0 right-0 h-dvh w-80 lg:hidden z-50 flex flex-col text-[#1D1D1D] bg-[#1D1D1D] shadow-xl transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botão fechar */}
        <div className="flex justify-end p-6">
          <button
            className="text-white hover:bg-[#8dda1a] hover:text-[#1D1D1D] p-3 rounded-lg cursor-pointer"
            onClick={closeMenu}
          >
            <FaXmark />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-6 mt-2 text-md font-medium">
          <li className="w-full text-center text-white p-3 hover:bg-[#8dda1a] hover:text-[#1D1D1D] transition">
            <a href="#" onClick={closeMenu}>
              Início
            </a>
          </li>

          <li className="w-full text-center text-white p-3 hover:bg-[#8dda1a] hover:text-[#1D1D1D] transition">
            <a href="#" onClick={closeMenu}>
              Sobre
            </a>
          </li>

          <li className="w-full text-center text-white p-3 hover:bg-[#8dda1a] hover:text-[#1D1D1D] transition">
            <a href="#" onClick={closeMenu}>
              Projetos
            </a>
          </li>

          <li className="w-full text-center text-white p-3 hover:bg-[#8dda1a] hover:text-[#1D1D1D] transition">
            <a href="#" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </div>

        <Button className="text-center mx-auto mt-8 bg-[#8dda1a] text-[#1D1D1D]">
          Fale com um especialista
        </Button>
      </ul>
    </header>
  );
}

export default Header;
