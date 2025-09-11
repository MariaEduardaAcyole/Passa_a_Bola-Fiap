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
    <div className="w-full corpo-home">
      <Header />

      <h2 className="text-2xl font-semibold txt-destaque-home">
        Já entrou no time,<br />
        agora entre em campo! 🏟️⚽
      </h2>

      <img src="/img/capa.svg" alt="Capa do site" width={500} height={200} className="img-capa-home" />
      
      <h2 className="text-xl font-bold mb-2 titulo-2-home">Próximos jogos</h2>

      <section className="section-carrossel">
          {/* Carrossel */}
         
            {jogos.map((jogo, index) => (
                <CardJogo {...jogo} />
            ))}

      </section>


      <section className="mb-6 section-home"> 
        <UltimoResultado />
      </section>

      <section className="mb-6 section-home">
        <Feed novosPosts={20} />
      </section>

      <MenuInferior />
    </div>
  );
}
