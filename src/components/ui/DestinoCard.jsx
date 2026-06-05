import Pais from "../../assets/imagens/toronto.jpg";

function DestinoCard() {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl">
      <img className="rounded-t-2xl" src={Pais} alt="toronto" />

      <div className="py-3 px-5">
        <h3 className="text-xl font-medium">Canadá</h3>

        <div className="flex justify-between items-center py-2">
          <div>
            <p className="">A partir de</p>
            <h3 className="text-lg font-medium">R$ 8.900</h3>
          </div>
          <div className="bg-black text-white rounded-[50%] px-3 py-2">→</div>
        </div>
      </div>
    </div>
  );
}

export default DestinoCard;
