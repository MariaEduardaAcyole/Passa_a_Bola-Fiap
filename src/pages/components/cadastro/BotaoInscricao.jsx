import React, { useState } from "react";

export default function BotaoInscricao({ atleta, jogo, inscreverUsuario }) {
  const [inscrito, setInscrito] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await inscreverUsuario(atleta.id, jogo.id_jogo, jogo.quantidade_jogadoras);
    setInscrito(true); // marca como inscrito após a confirmação
    setLoading(false);
  };

  return (
   <button
      onClick={handleClick}
      disabled={inscrito || loading}
      className={`btn-inscricao ${inscrito ? "inscrito" : ""}`}
    >
      {loading ? "Processando..." : inscrito ? "Inscrito" : "Inscrever-se"}
    </button>
  );
}
