import MenuInferior from "./components/MenuInferior";
import Header from "./components/Header";
import ItemListaJogos from "./components/itemListaJogos";

export default function listaJogos() {
  return (
    <div className="listaJogos-corpo">
      {/* Header */}
      <Header />

      <h2 className="titulo-2">Próximos Jogos</h2>
      <h3 className="subtitulo">Qual próximo jogo voce participará</h3>

<div className="containerJogos">
      <ItemListaJogos />
      <ItemListaJogos />
      <ItemListaJogos />
      <ItemListaJogos />
    </div>

      {/* Menu Inferior */}
      <MenuInferior />

      <footer></footer>
    </div>
  );
}
