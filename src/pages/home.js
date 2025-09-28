//home.js
import CardJogo from "../pages/components/CardJogo";
import UltimoResultado from "../pages/components/UltimoResultado";
import MenuInferior from "../pages/components/MenuInferior";
import Header from "../pages/components/Header";
import Clima from "../pages/components/Clima";

export default function Home() {
  const jogos = [
    { dia: "09", mesAno: "Junho/2025", diaSemana: "Domingo", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "10", mesAno: "Junho/2025", diaSemana: "Segunda", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "11", mesAno: "Junho/2025", diaSemana: "Terça", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "12", mesAno: "Junho/2025", diaSemana: "Quarta", local: "Av das Nações Unidas", img: "/img/campo.svg" },
  ];

  return (
    <div className="home-w-full home-corpo">
      
      <Header />

      <h2 className="home-text-2xl home-font-semibold home-txt-destaque">
        Já entrou no time,<br />
        agora entre em campo! 🏟️⚽
      </h2>

      <img src="/img/capa.svg" alt="Capa do site" width={500} height={200} className="home-img-capa" />

      <h2 className="text-xl font-bold mb-2 home-titulo-2">Próximos jogos</h2>

      <section className="home-section-carrossel">
        {/* Carrossel */}

        {jogos.map((jogo, index) => (
          <CardJogo {...jogo} />
        ))}
        
      </section>
<section className="section-clima">
      <Clima />
</section>
      <h2 className="text-xl font-bold mb-2 home-titulo-2">Radar seleção</h2>

      <section className="home-mb-6 home-section home-section-ultimo-resultado">
        <UltimoResultado />
      </section>

      <section className="mb-6 home-section">
        <div className="home-acesse-feed">
          <h2 className="titulo-2 home-acesso-feed">
            Acesse o Feed
            <img src="../img/estrela.gif" className="home-icone-feed" alt="Estrela animada" />
          </h2>

          <div className="home-novos-posts">
            {/* círculos decorativos */}
            <div className="home-circulo home-circulo-roxo"></div>
            <div className="home-circulo home-circulo-rosa"></div>
            <div className="home-circulo home-circulo-branco"></div>

            <span>20 Novos Posts</span>
          </div>
        </div>

      </section>

      <MenuInferior />

    </div>
  );
}