import CardJogo from "../pages/components/CardJogo";
import UltimoResultado from "../pages/components/UltimoResultado";
import Feed from "../pages/components/Feed";
import MenuInferior from "../pages/components/MenuInferior";
import Header from "../pages/components/Header";

export default function HomePage() {
  const jogos = [
    { dia: "09", mesAno: "Junho/2025", diaSemana: "Domingo", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "10", mesAno: "Junho/2025", diaSemana: "Segunda", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "11", mesAno: "Junho/2025", diaSemana: "Terça", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "12", mesAno: "Junho/2025", diaSemana: "Quarta", local: "Av das Nações Unidas", img: "/img/campo.svg" },
  ];

  return (
    <div className="bg-gray-100 font-['Roboto'] text-gray-800 min-h-screen pb-24">
      <div className="max-w-xl mx-auto p-4">
        <Header />

        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">PRÓXIMOS JOGOS</h2>
          <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2">
            {jogos.map((jogo, index) => (
              <CardJogo key={index} {...jogo} />
            ))}
          </div>
        </section>

        <section className="mb-6">
          <UltimoResultado dia="09" mesAno="Junho/2025" diaSemana="Domingo" local="Av das Nações Unidas" />
        </section>

        <section className="mb-6">
          <Feed novosPosts={20} />
        </section>
      </div>

      <div className="h-20">
              <MenuInferior />
        </div> {/* Espaço para o menu */}
    </div>
  );
}
