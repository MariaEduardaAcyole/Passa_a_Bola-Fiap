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
      .select("*")
      .order("data_jogo", { ascending: true });

    if (error) console.error("Erro ao buscar jogos:", error);
    else setJogos(data);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Agendado":
        return "bg-blue-100 text-blue-800";
      case "Concluído":
        return "bg-green-100 text-green-800";
      case "Cancelado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
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

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Jogos Cadastrados</h2>
      {jogos.length === 0 ? (
        <p>Nenhum jogo cadastrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogos.map((j) => (
            <div
              key={j.id_jogo}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              {/* Nome do jogo em destaque com cor roxa */}
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--roxo)" }}>
                {j.nome_jogo}
              </h3>

              {/* Informações com ícones */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(j.data_jogo)}</span>
                </div>
                     <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>{(j.hora)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5" />
                  <span>{j.local}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5" />
                  <span>{j.quantidade_jogadoras} jogadoras</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <DollarSign className="w-5 h-5" />
                  <span>R$ {j.valor}</span>
                </div>
              </div>

              {/* Status */}
              <div
                className={`mt-4 px-3 py-1 rounded-full text-sm font-medium w-max ${getStatusColor(
                  j.status
                )}`}
              >
                {j.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
