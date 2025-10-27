//[id].js
import { useRouter } from "next/router";
import MenuInferior from "../../components/MenuInferior";
import Header from "../../components/Header";

export default function DetalhesJogoEditar() {
  const router = useRouter();
  const { id } = router.query; // pega o parâmetro da URL

  if (!id) return <p>Carregando...</p>;

  return (
    <div className="detalhesJogo-container">
      <Header />

      <h2 className="titulo-2">Detalhes do Jogo</h2>
      <h3 className="subtitulo">Editar informações do jogo #{id}</h3>

      <div className="detalhesJogo-card">
        <label className="detalhesJogo-nome">
          Nome do Jogo:
          <input type="text" defaultValue="nome" />
        </label>

        <label className="detalhesJogo-dia-mes-ano">
          Data:
          <input type="text" defaultValue="01/01/2026" />
        </label>

        <label className="detalhesJogo-hora">
          Hora:
          <input type="text" defaultValue="19h" />
        </label>

        <img src="/img/campo.svg" className="detalhesJogo-img-campo" />


        <label className="detalhesJogo-campo">
          Campo:
          <input type="text" defaultValue="Campo Fut Delas" />
        </label>

        <label className="detalhesJogo-localizacao">

          Localização:
          <input type="text" defaultValue="Av. Futebolistica 111 - Tatuapé" />
        </label>

        <label className="detalhesJogo-vagas">
          Vagas:
          <input type="text" defaultValue="0" />
        </label>

        <label className="detalhesJogo-nivel">
          Nivel:
          <select name="select" className="detalhes-inputs">
            <option value="valor1" selected>
              Amador
            </option>
            <option value="valor2">Profissional</option>
          </select>
        </label>

        <button className="detalhesJogo-botao-salvar">Salvar Alterações</button>
      </div>

      <footer></footer>
      <MenuInferior />

    </div>
  );
}
