//listaCampeonatos.js
import MenuInferior from "./components/MenuInferior";
import Header from "./components/Header";


export default function ListaCampeonatos() {
  return (
    <div className="listaCampeonatos-corpo">
      {/* Header */}
      <Header />

      <h2 className="titulo-2">Próximos Campeonatos</h2>
      <h3 className="listaCampeonatos-subtitulo">Escolha em qual campeonato você quer participar</h3>

      <section className="containerCampeonatos">

      </section>

      {/* Menu Inferior */}
      <MenuInferior />

      <footer></footer>
    </div>
  );
}
