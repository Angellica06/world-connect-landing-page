import Logo from "../../assets/imagens/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contato" className="bg-[#011825] text-[#FFFFFD] pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
        <div>
          <img className="w-32" src={Logo} alt="world-connect" />
          <p className="text-sm text-[#C1C1C1] mt-3">
            Conectando pessoas a experiências que transformam vidas.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/60 mb-4">
            Contato
          </p>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-[#79a73d] transition"
          >
            (00) 00000-0000
          </a>
          <a
            href="#"
            className="flex items-center gap-3 hover:text-[#79a73d] transition"
          >
            contato@worldconnect.com.br
          </a>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.25em] mb-4">
            Redes Sociais
          </p>
          <a
            href="#"
            className="inline-flex text-2xl items-center px-1 hover:text-[#79a73d] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="inline-flex text-2xl items-center px-1 hover:text-[#79a73d] transition"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="inline-flex text-2xl items-center px-1 hover:text-[#79a73d] transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="mt-14 pt-8 text-[#C1C1C1] border-t border-[#313b34] text-center text-sm">
        <p>© 2026 World Connect. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
