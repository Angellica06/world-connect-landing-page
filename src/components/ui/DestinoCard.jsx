// import Pais from "../../assets/imagens/canada.jpg";
import { FaArrowRight } from "react-icons/fa6";

function DestinoCard({ pais, preco, imagem }) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img className="rounded-t-2xl h-full" src={imagem} alt="toronto" />

      <div className="py-3 px-5">
        <h3 className="text-xl font-medium">{pais}</h3>

        <div className="flex justify-between items-center py-2">
          <div>
            <p className="">A partir de</p>
            <h3 className="text-lg font-medium">R$ {preco}</h3>
          </div>
          <div className="bg-black text-white rounded-full p-3 cursor-pointer transition-colors duration-500 hover:bg-[#79a73d]">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinoCard;
