import {
  FaLanguage,
  FaUserGraduate,
  FaBriefcase,
  FaCompass,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const beneficios = [
  {
    id: 1,
    icon: FaLanguage,
    title: "Aprimore o idioma",
    description:
      "Desenvolva sua fluência e ganhe confiança para se comunicar em diferentes situações do dia a dia.",
  },
  {
    id: 2,
    icon: FaUserGraduate,
    title: "Crescimento pessoal",
    description:
      "Amplie sua visão de mundo, fortaleça sua autoconfiança e viva novas experiências.",
  },
  {
    id: 3,
    icon: FaBriefcase,
    title: "Impulsione sua carreira",
    description:
      "Destaque seu currículo com uma experiência internacional valorizada pelo mercado.",
  },
  {
    id: 4,
    icon: FaCompass,
    title: "Independência",
    description:
      "Aprenda a lidar com desafios, tomar decisões e se adaptar a novos ambientes.",
  },
  {
    id: 5,
    icon: FaUsers,
    title: "Amizades globais",
    description:
      "Construa conexões com pessoas de diferentes culturas e expanda sua rede de contatos.",
  },
  {
    id: 6,
    icon: FaGlobe,
    title: "Experiências únicas",
    description:
      "Conheça novos lugares, culturas e momentos que marcarão sua vida para sempre.",
  },
];

function Beneficio() {
  return (
    <section id="beneficios" className="px-12 lg:px-32 py-20 bg-[#f8faf8]">
      <div className="max-w-md">
        <p className="text-sm font-medium">
          POR QUE FAZER INTERCÂMBIO?
        </p>

        <h1 className="mt-2 text-3xl font-medium">
          Benefícios que vão além da sala de aula
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {beneficios.map((beneficio) => {
          const Icon = beneficio.icon;

          return (
            <div
              key={beneficio.id}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-[#d7f3aa] flex items-center justify-center">
                <Icon className="text-[#153130] text-2xl" />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#153130]">
                {beneficio.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="flex justify-center items-center gap-2 text-[#153130] font-medium underline pt-8 duration-300 hover:-translate-y-1"
        >
          Ver todos os destinos
        </a>
      </div>
    </section>
  );
}

export default Beneficio;
