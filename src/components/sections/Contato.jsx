import Button from "../ui/Button";
import { FaWhatsapp } from "react-icons/fa";

function Contato() {
  return (
    <section
      id="contato"
      className="contato  flex items-center justify-center h-[50vh] px-12 lg:px-32 py-14 bg-[#f8faf8]"
    >
      <div className="text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold">
          Seu intercâmbio começa aqui.
        </h2>
        <p className="my-8">
          Fale com um especialista e comece a planejar sua próxima aventura.
        </p>

        <Button className="inline-flex items-center gap-2 bg-[#8dda1a] hover:bg-[#74b81b] hover:text-white">
          <FaWhatsapp className="text-xl" />
          Solicitar consultoria gratuita
        </Button>
      </div>
    </section>
  );
}

export default Contato;
