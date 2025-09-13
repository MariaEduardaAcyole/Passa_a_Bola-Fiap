import MenuInferior from "./components/MenuInferior";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <div className="listaJogos-corpo">
      {/* Header */}
      <Header />

      <h2 className="titulo-2">Próximos Jogos</h2>
      <h3 className="subtitulo">Qual próximo jogo voce participará</h3>

      <div className="listaJogos-card-jogos-criado">
        <div className="listaJogos-infos">
          <p class="listaJogos-dia">09</p>
          <p class="listaJogos-mes-ano">Outubro/2025</p>
          <p class="listaJogos-dia-da-semana">Domingo</p>
          <p class="listaJogos-hora">19h</p>
          <p class="listaJogos-localizacao">Av. Futebolistica</p>
        </div>
        <img className="listaJogos-img-campo" src="/img/campo.svg" />
      </div>
      {/* Menu Inferior */}
      <MenuInferior />
    </div>
  );
}
