import supabase from "../../lib/supabaseClient"; // ajuste o caminho conforme seu projeto

export async function inscreverUsuario(idAtleta, idJogo, status) {
  try {
    // 1️⃣ Inserir a inscrição do atleta
    const { error: errorInscricao } = await supabase
      .from("inscricoes")
      .insert([{ id_atleta: idAtleta, id_jogo: idJogo, status }]);

    if (errorInscricao) throw errorInscricao;

    // 2️⃣ Se for inscrição confirmada, diminuir as vagas restantes no jogo
    if (status === "confirmado") {
      // Pega o jogo atual
      const { data: jogoAtual, error: errorJogo } = await supabase
        .from("jogos")
        .select("quantidade_jogadoras")
        .eq("id_jogo", idJogo)
        .single();

      if (errorJogo) throw errorJogo;

      // Atualiza a quantidade de vagas
      const novasVagas = Math.max(jogoAtual.quantidade_jogadoras - 1, 0);

      const { error: errorAtualizacao } = await supabase
        .from("jogos")
        .update({ quantidade_jogadoras: novasVagas })
        .eq("id_jogo", idJogo);

      if (errorAtualizacao) throw errorAtualizacao;
    }

    return true;
  } catch (err) {
    console.error("Erro ao inscrever atleta:", err);
    throw err;
  }
}
