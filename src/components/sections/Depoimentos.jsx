import { FaStar } from "react-icons/fa";

const depoimentos = [
  {
    id: 1,
    descricao:
      "O intercâmbio foi a melhor decisão da minha vida. Aprendi muito, conheci lugares incríveis e desenvolvi mais confiança para enfrentar novos desafios no dia a dia.",
    nome: "Juliana Maia",
    pais: "Canadá",
  },
  {
    id: 2,
    descricao:
      "Estudar na Irlanda me ajudou a aprimorar meu inglês, fazer amizades internacionais e ganhar experiências que fizeram diferença na minha vida pessoal e profissional.",
    nome: "Rafael Silva",
    pais: "Irlanda",
  },
  {
    id: 3,
    descricao:
      "Morar na Austrália foi uma experiência transformadora. Conheci novas culturas, conquistei mais independência e vivi momentos que levarei para sempre comigo.",
    nome: "Camila Ramos",
    pais: "Austrália",
  },
];

function Depoimentos() {
  return (
    <section className="depoimento h-full px-12 lg:px-32 py-14">
      <div className="max-w-md">
        <p className="text-sm">DEPOIMENTOS</p>
        <h1 className="max-w-sm text-3xl font-medium">
          Histórias reais, transformações verdadeiras
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {depoimentos.map((depoimento) => (
          <div
            key={depoimento.id}
            className="bg-white p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="text-amber-300" />
              ))}
            </div>
            <p className="mt-3 text-gray-600 leading-relaxed">
              "{depoimento.descricao}"
            </p>
            <h3 className="mt-5 text-lg font-semibold text-[#153130]">
              {depoimento.nome}
            </h3>
            <span className="text-gray-600">{depoimento.pais}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;
