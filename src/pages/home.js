import CardJogo from "../pages/components/CardJogo";
import UltimoResultado from "../pages/components/UltimoResultado";
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

      <h2 className="text-xl font-bold mb-2 titulo-2-home">Radar seleção</h2>

      <section className="mb-6 section-home section-ultimo-resultado">
        <UltimoResultado />
      </section>

      <section className="mb-6 section-home">
        <div className="acesse-feed">
          <h2 className="titulo-2 acesso-feed">
            Acesse o Feed
            <img src="../img/estrela.gif" className="icone-feed" alt="Estrela animada" />
          </h2>

          <div className="novos-posts">
            {/* círculos decorativos */}
            <div className="circulo circulo-roxo"></div>
            <div className="circulo circulo-rosa"></div>
            <div className="circulo circulo-branco"></div>

            <span>20 Novos Posts</span>
          </div>
        </div>

      </section>
      
      <MenuInferior />

      <footer></footer>
    </div>
  );
}
