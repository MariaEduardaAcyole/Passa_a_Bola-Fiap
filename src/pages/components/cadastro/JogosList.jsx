import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import { Calendar, Clock, MapPin, Users, DollarSign } from "lucide-react";

export default function JogosList() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetchJogos();
  }, []);

  const fetchJogos = async () => {
    const { data, error } = await supabase
      .from("jogos")
      .select(
        `
    *,
    campos:local (nome, foto_url)
  `
      )
      .order("data_jogo", { ascending: true });

    if (error) console.error("Erro ao buscar jogos:", error);
    else setJogos(data);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatHour = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <h2 className="titulo-lista">Jogos Cadastrados</h2>
      {jogos.length === 0 ? (
        <p>Nenhum jogo cadastrado.</p>
      ) : (
        <div className="jogos-grid">
          {jogos.map((j) => (
            <div key={j.id_jogo} className="jogo-card">
              <h3 className="jogo-nome">{j.nome_jogo}</h3>

              <div className="jogo-info">
                <img
                  src={j.campos?.foto_url}
                  alt={j.campos?.nome || "Campo"}
                  width={200}
                />

                <p>
                  <Calendar size={18} /> {formatDate(j.data_jogo)}
                </p>
                <p>
                  <Clock size={18} /> {formatHour(j.data_jogo)}
                </p>
                <p>
                  <MapPin size={18} /> 
                                  {j.campos?.nome || "Sem campo"}

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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
