import MenuInferior from "./components/MenuInferior";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <div className="listaJogos-corpo">
      {/* Header */}
      <Header />

     
      {/* Menu Inferior */}
      <MenuInferior />
        
    </div>
  );
}
