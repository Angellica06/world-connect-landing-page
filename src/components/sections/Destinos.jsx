import DestinoCard from "../ui/DestinoCard";

function Destinos() {
  return (
    <section className="destino h-full px-16 md:px-32 py-14">
      <div className="md:w-[40%]">
        <p className="text-sm">DESTINOS POPULARES</p>
        <h1 className="text-3xl font-medium">
          Encontre o lugar perfeito para sua próxima jornada
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <DestinoCard />
        <DestinoCard />
        <DestinoCard />

        <div className="md:col-span-3 grid md:grid-cols-2 gap-4">
          <DestinoCard />
          <DestinoCard />
        </div>
      </div>

      <p className="text-center underline pt-8">Ver todos os destinos →</p>
    </section>
  );
}

export default Destinos;
