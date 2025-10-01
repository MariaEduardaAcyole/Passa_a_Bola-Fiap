import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import { Calendar, Clock, MapPin, Users, DollarSign } from "lucide-react";
import BotaoInscricao from "./BotaoInscricao";

export default function JogosList() {
  const [jogos, setJogos] = useState([]);
  const [atleta, setAtleta] = useState(null);

  useEffect(() => {
    fetchJogos();
    fetchAtletaLogado();
  }, []);

  // Busca todos os jogos e os campos relacionados
  const fetchJogos = async () => {
    const { data, error } = await supabase
      .from("jogos")
      .select(`*, campos:local (nome, foto_url)`)
      .order("data_jogo", { ascending: true });

    if (error) {
      console.error("Erro ao buscar jogos:", error);
    } else {
      setJogos(data);
    }
  };

  // Busca o atleta logado no localStorage
  const fetchAtletaLogado = () => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
      console.log("Nenhum usuário logado");
      return;
    }

    if (!usuarioLogado.atletaId) {
      console.log("Usuário logado não é atleta");
      return;
    }

    setAtleta({ id: usuarioLogado.atletaId });
  };

  // Função para inscrever usuário em um jogo
  const inscreverUsuario = async (atletaId, jogoId, maxJogadoras) => {
    if (!atletaId) {
      alert("Usuário não é atleta, não pode se inscrever.");
      return;
    }

    // Conta quantos atletas já estão inscritos confirmados
    const { count, error: countError } = await supabase
      .from("inscricoes")
      .select("*", { count: "exact", head: true })
      .eq("id_jogo", jogoId)
      .eq("status", "confirmada");

    if (countError) {
      console.error("Erro ao contar inscritos:", countError);
      return;
    }

    const status = count < maxJogadoras ? "confirmada" : "espera";

    // Insere a inscrição
    const { error } = await supabase
      .from("inscricoes")
      .insert([{ id_atleta: atletaId, id_jogo: jogoId, status }]);

    if (error) {
      console.error("Erro ao inscrever atleta:", error);
    } else {
      alert(
        status === "confirmada"
          ? "Inscrição confirmada!"
          : "Entrou na lista de espera."
      );
    }
  };

  return (
    <div>
      <h2 className="titulo-lista">Jogos Cadastrados</h2>
      {jogos.length === 0 ? (
        <p>Nenhum jogo cadastrado.</p>
      ) : (
        <div className="jogos-grid">
          {jogos.map((j, index) => (
            <div
              key={j.id_jogo || `${j.nome_jogo}-${index}`}
              className="jogo-card"
            >
              <h3 className="jogo-nome">{j.nome_jogo}</h3>

              <div className="jogo-info">
                <img
                  src={j.campos?.foto_url}
                  alt={j.campos?.nome || "Campo"}
                  width={200}
                />
                <p>
                  <Calendar size={18} />{" "}
                  {new Date(j.data_jogo).toLocaleDateString("pt-BR")}
                </p>
                <p>
                  <Clock size={18} />{" "}
                  {new Date(j.data_jogo).toLocaleTimeString("pt-BR")}
                </p>
                <p>
                  <MapPin size={18} /> {j.campos?.nome || "Sem campo"}
                </p>
                <p>
                  <Users size={18} /> {j.quantidade_jogadoras} jogadoras
                </p>
                <p>
                  <DollarSign size={18} /> R$ {j.valor}
                </p>
              </div>

              <span className={`status status-${j.status.toLowerCase()}`}>
                {j.status}
              </span>

          {atleta ? (
                <BotaoInscricao
                  atleta={atleta}
                  jogo={j}
                  inscreverUsuario={inscreverUsuario}
                  className="btn-inscricao"
                />
              ) : (
                <p>Carregando botão...</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
