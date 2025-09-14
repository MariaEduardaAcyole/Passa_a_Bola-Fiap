import MenuInferior from "./components/MenuInferior";
import Header from "./components/Header";
import ItemListaJogos from "./components/ItemListaJogos";

export default function listaJogos() {
  return (
    <div className="listaJogos-corpo">
      {/* Header */}
      <Header />

      <h2 className="titulo-2">Próximos Jogos</h2>
      <h3 className="subtitulo listaJogosEditar-subtitulo">Qual próximo jogo voce participará</h3>

      <div className="containerJogos">
        <ItemListaJogos id={1} />
        <ItemListaJogos id={2} />
        <ItemListaJogos id={3} />
        <ItemListaJogos id={4} />
      </div>

      {/* Menu Inferior */}
      <MenuInferior />

      <footer></footer>
    </div>
  );
}
