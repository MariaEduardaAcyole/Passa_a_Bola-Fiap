import Image from "next/image";

export default function UltimoResultado({ dia, mesAno, diaSemana, local }) {
  return (
    <div className="container-resultado">
      <div className="caixa-ultimo-resultado">
        <img src="/img/icon-taca.png" className="icon-taca" />
        <h2 className="text-xl font-bold mb-2 titulo-2-home titulo-resultado">Ultimo Resultado</h2>
        <img src="/img/bandeira-argentina.png" className="bandeira-argentina-resultado" />

        <h1 className="placar-resultado">3 vs 0</h1>
        <img src="/img/bandeira-brasil.png" className="bandeira-brasil-resultado" />
        <h3 className=" font-light text-xs text-gray data-jogo-resultado">15/9</h3>
      </div>
      <div className="caixa-proximo-jogo">
        <img src="/img/icon-taca.png" className="icon-taca" />
        <h2 className="text-xl font-bold mb-2 titulo-2-home titulo-resultado">Próximo Jogo</h2>
        <img src="/img/bandeira-argentina.png" className="bandeira-argentina-resultado" />
        <h1 className="placar-resultado"> vs </h1>
        <img src="/img/bandeira-brasil.png" className="bandeira-brasil-resultado" />
        <h3 className=" font-light text-xs text-gray data-jogo-resultado">15/9</h3>
      </div>

    </div>
  );
}
