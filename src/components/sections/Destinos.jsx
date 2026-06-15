import DestinoCard from "../ui/DestinoCard";
import Imagem1 from "../../assets/imagens/canada.jpg";
import Imagem2 from "../../assets/imagens/irlanda.jpg";
import Imagem3 from "../../assets/imagens/australia.jpg";
import Imagem4 from "../../assets/imagens/estadosunidos.jpg";
import Imagem5 from "../../assets/imagens/reinounido.png";

const destinos = [
  {
    id: 1,
    pais: "Canadá",
    preco: "8.900",
    imagem: Imagem1,
  },
  {
    id: 2,
    pais: "Irlanda",
    preco: "7.900",
    imagem: Imagem2,
  },
  {
    id: 3,
    pais: "Austrália",
    preco: "10.900",
    imagem: Imagem3,
  },
  {
    id: 4,
    pais: "Estados Unidos",
    preco: "10.900",
    imagem: Imagem4,
  },
  {
    id: 5,
    pais: "Reino Unido",
    preco: "8.400",
    imagem: Imagem5,
  },
];

function Destinos() {
  return (
    <section id="destino" className="destino h-full px-12 lg:px-32 py-14">
      <div className="max-w-md">
        <p className="text-sm">DESTINOS POPULARES</p>
        <h1 className="text-3xl font-medium">
          Encontre o lugar perfeito para sua próxima jornada
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
        {destinos.map((destino, index) => (
          <div
            key={destino.id}
            className={index < 3 ? "md:col-span-2" : "md:col-span-3"}
          >
            <DestinoCard
              imagem={destino.imagem}
              pais={destino.pais}
              preco={destino.preco}
            />
          </div>
        ))}
      </div>

      <a
        href="#"
        className="flex justify-center items-center gap-2 text-[#153130] font-medium underline pt-8 duration-300 hover:-translate-y-1"
      >
        Ver todos os destinos
      </a>
    </section>
  );
}

export default Destinos;
