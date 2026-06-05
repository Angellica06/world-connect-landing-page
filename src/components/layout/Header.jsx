import Button from "../ui/Button";
import logo from "../../assets/imagens/logo.png";

function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md fixed top-0 left-0 w-full p-3">
      <nav className="flex justify-around items-center">
        <img className="w-26" src={logo} alt="World Connect" />

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#">Destinos</a>
            </li>
            <li>
              <a href="#">Como Funciona</a>
            </li>
            <li>
              <a href="#">Beneficios</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
          </ul>
        </div>

        <div>
          <Button className="text-white">Fale com um especialista</Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
