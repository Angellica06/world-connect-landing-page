import Button from "../ui/Button";

function Hero() {
  return (
    <section className="hero grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12 md:px-32 mt-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-semibold">
          Descubra o mundo através de experiências que{" "}
          <span className="text-[#8dda1a]">transformam vidas</span>.
        </h1>
        <p className="max-w-xl text-lg text-gray-800">
          Estude, trabalhe e viva experiências inesquecíveis em mais de 20
          países com o suporte completo da World Connect.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button className="text-white">Quero fazer intercâmbio</Button>
          <Button className="bg-transparent text-[#1D1D1D] border border-[#1D1D1D]">
            Fale com um especialista →
          </Button>
        </div>

        <div className="flex gap-8 mt-4">
          <div>
            <p className="text-3xl text-gray-900 font-bold">20+</p>
            <p className="text-sm text-gray-500">Países</p>
          </div>

          <div>
            <p className="text-3xl text-gray-900 font-bold">5.000+</p>
            <p className="text-sm text-gray-500">Estudantes</p>
          </div>

          <div>
            <p className="text-3xl text-gray-900 font-bold">98%</p>
            <p className="text-sm text-gray-500">Satisfação</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
