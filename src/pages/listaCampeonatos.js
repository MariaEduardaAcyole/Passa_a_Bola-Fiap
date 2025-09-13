import MenuInferior from "./components/MenuInferior";
import Header from "./components/Header";
import ItemCampeonato from "./components/ItemCampeonato";

export default function ListaCampeonatos() {
  return (
    <div className="listaCampeonatos-corpo">
      {/* Header */}
      <Header />

      <h2 className="titulo-2">Próximos Campeonatos</h2>
      <h3 className="listaCampeonatos-subtitulo">Escolha em qual campeonato você quer participar</h3>

      <section className="containerCampeonatos">
        <ItemCampeonato />
        <ItemCampeonato />
        <ItemCampeonato />
      </section>

      {/* Menu Inferior */}
      <MenuInferior />

      <footer></footer>
    </div>
  );
}
