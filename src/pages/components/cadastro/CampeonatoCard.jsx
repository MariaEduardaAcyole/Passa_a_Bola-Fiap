import React from "react";
import { Calendar, MapPin, Users, Trophy, Clock } from "lucide-react";
import Link from "next/link";

const CampeonatoCard = ({ campeonato }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Inscrições Abertas":
        return "bg-green-100 text-green-700 border-green-400";
      case "Encerrado":
        return "bg-red-100 text-red-700 border-red-400";
      case "Em Andamento":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-400";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Nome do Campeonato */}
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Trophy className="text-purple-600" size={22} />
        {campeonato.nome}
      </h2>

      {/* Informações */}
      <div className="space-y-2 text-sm text-gray-700">
        <p className="flex items-center gap-2">
          <Calendar size={18} className="text-purple-600" />
          Início: {campeonato.data_inicio}
        </p>
        <p className="flex items-center gap-2">
          <Clock size={18} className="text-purple-600" />
          Fim: {campeonato.data_fim}
        </p>
        <p className="flex items-center gap-2">
          <MapPin size={18} className="text-purple-600" />
          Local: {campeonato.local}
        </p>
        <p className="flex items-center gap-2">
          <Users size={18} className="text-purple-600" />
          Times inscritos: {campeonato.times || 0}
        </p>
      </div>

      {/* Status e Ação */}
      <div className="mt-6 flex items-center justify-between">
        <span
          className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(
            campeonato.status
          )}`}
        >
          {campeonato.status}
        </span>

        {campeonato.status === "Inscrições Abertas" && (
          <Link
            href={`/campeonatos/${campeonato.id}`}
            className="px-4 py-2 bg-purple-600 text-white text-sm rounded-xl hover:bg-purple-700 transition-colors"
          >
            Participar
          </Link>
        )}
      </div>
    </div>
  );
};

export default CampeonatoCard;
