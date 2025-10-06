import React, { useState } from "react";

export default function BotaoInscricao({ atleta, jogo, inscreverUsuario }) {
  const [inscrito, setInscrito] = useState(false);
  const [status, setStatus] = useState(null); // 'confirmada' ou 'espera'
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!atleta) return alert("Faça login para se inscrever!");

    setLoading(true);

    try {
      // Chama função externa passando maxJogadoras
      const novaStatus = await inscreverUsuario(
        atleta.id,
        jogo.id_jogo,
        jogo.quantidade_jogadoras
      );

      setInscrito(true);
      setStatus(novaStatus);
      alert(
        novaStatus === "confirmada"
          ? "Inscrição confirmada!"
          : "Você entrou na lista de espera!"
      );
    } catch (err) {
      alert("Erro ao se inscrever. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  let textoBotao;
  if (loading) textoBotao = "Processando...";
  else if (inscrito)
    textoBotao = status === "confirmada" ? "Inscrito" : "Na Lista de Espera";
  else textoBotao = jogo.quantidade_jogadoras > 0 ? "Inscrever-se" : "Entrar na Lista de Espera";

  return (
    <button
      onClick={handleClick}
      disabled={inscrito || loading}
      className={`btn-inscricao ${inscrito ? "inscrito" : ""}`}
    >
      {textoBotao}
    </button>
  );
}
