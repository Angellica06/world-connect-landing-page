function ComoFunciona() {
  return (
    <section className="bg-[#153130] text-white destino h-full px-12 md:px-32 py-14">
      <p className="text-sm">COMO FUNCIONA</p>
      <h1 className="text-3xl font-medium">Encontre seu destino em 4 passos</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="flex flex-col gap-2">
          <p className="bg-[#9DFF00] text-[#153130] w-fit rounded-4xl px-4 py-2 text-center font-bold">
            1
          </p>
          <h3 className="text-xl font-medium">Escolha o destino</h3>
          <p>Encontre o programa perfeito para seus objetivos.</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bg-[#9DFF00] text-[#153130] w-fit rounded-4xl px-4 py-2 text-center font-bold">
            2
          </p>
          <h3 className="text-xl font-medium">Planeje sua viagem</h3>
          <p>
            Organize cada etapa com orientação especializada.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bg-[#9DFF00] text-[#153130] w-fit rounded-4xl px-4 py-2 text-center font-bold">
            3
          </p>
          <h3 className="text-xl font-medium">Receba suporte documental </h3>
          <p>
            Auxiliamos em toda a documentação necessária.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="bg-[#9DFF00] text-[#153130] w-fit rounded-4xl px-4 py-2 text-center font-bold">
            4
          </p>
          <h3 className="text-xl font-medium">Embarque para sua experiência</h3>
          <p>
            Prepare-se para viver uma experiência transformadora.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;
