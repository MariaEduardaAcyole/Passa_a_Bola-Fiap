import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";

export default function CampeonatosList() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetchCampeonatos();
  }, []);

  const fetchCampeonatos = async () => {
    const { data, error } = await supabase
      .from("campeonatos")
      .select("*")
      .order("datainicio", { ascending: true });

    if (error) console.error("Erro ao buscar campeonatos:", error);
    else setCampeonatos(data);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Inscrições Abertas":
        return "bg-blue-100 text-blue-800";
      case "Em Andamento":
        return "bg-green-100 text-green-800";
      case "Encerrado":
        return "bg-gray-100 text-gray-800";
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
      <h2 className="text-xl font-bold mb-4">Campeonatos Cadastrados</h2>
      {campeonatos.length === 0 ? (
        <p>Nenhum campeonato cadastrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campeonatos.map((c) => (
            <div
              key={c.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              {/* Nome do campeonato em destaque */}
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--roxo)" }}>
                {c.nome}
              </h3>

              {/* Informações com ícones */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <Trophy className="w-5 h-5" />
                  <span>{c.modalidade}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(c.datainicio)} - {formatDate(c.datafim)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5" />
                  <span>{c.local}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5" />
                  <span>{c.equipesinscritas} equipes inscritas</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span>Vagas disponíveis:</span>
                  <strong>{c.vagasdisponiveis}</strong>
                </div>
              </div>

              {/* Status */}
              <div
                className={`mt-4 px-3 py-1 rounded-full text-sm font-medium w-max ${getStatusColor(
                  c.status
                )}`}
              >
                {c.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
