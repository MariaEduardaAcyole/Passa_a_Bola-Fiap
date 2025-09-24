//UltimoResultado.js
import Image from "next/image";

export default function UltimoResultado({ dia, mesAno, diaSemana, local }) {
  return (
    <div className="home-container-resultado">
      <div className="home-caixa-ultimo-resultado">
        <img src="/img/icon-taca.png" className="home-icon-taca" />
        <h2 className="text-xl font-bold mb-2 home-titulo-2 home-titulo-resultado">Ultimo Resultado</h2>
        <img src="/img/bandeira-argentina.png" className="home-bandeira-argentina-resultado" />

        <h1 className="home-placar-resultado">3 vs 0</h1>
        <img src="/img/bandeira-brasil.png" className="home-bandeira-brasil-resultado" />
        <h3 className=" font-light text-xs text-gray home-data-jogo-resultado">15/9</h3>
      </div>
      <div className="home-caixa-proximo-jogo">
        <img src="/img/icon-calendario.png" className="home-icon-taca" />
        <h2 className="text-xl font-bold mb-2 home-titulo-2 home-titulo-resultado">Próximo Jogo</h2>
        <img src="/img/bandeira-argentina.png" className="home-bandeira-argentina-resultado" />
        <h1 className="home-placar-resultado"> vs </h1>
        <img src="/img/bandeira-brasil.png" className="home-bandeira-brasil-resultado" />
        <h3 className=" font-light text-xs text-gray home-data-jogo-resultado">15/9</h3>
      </div>

    </div>
  );
}
