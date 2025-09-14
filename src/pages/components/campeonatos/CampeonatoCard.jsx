import React from 'react';
import { Calendar, MapPin, Users, Trophy, Clock } from 'lucide-react';
import MenuInferior from '../MenuInferior';

const CampeonatoCard = ({ campeonato }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Inscrições Abertas':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Em Andamento':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Finalizado':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getModalidadeIcon = (modalidade) => {
    return <Trophy className="w-4 h-4" />;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      {/* Header do Card */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex-1 pr-2">
          {campeonato.nome}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(campeonato.status)}`}>
          {campeonato.status}
        </span>
      </div>

      {/* Informações Principais */}
      <div className="space-y-3 mb-4">
        {/* Modalidade */}
        <div className="flex items-center text-gray-600">
          {getModalidadeIcon(campeonato.modalidade)}
          <span className="ml-2 text-sm font-medium">{campeonato.modalidade}</span>
        </div>

        {/* Datas */}
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="ml-2 text-sm">
            {formatDate(campeonato.dataInicio)} - {formatDate(campeonato.dataFim)}
          </span>
        </div>

        {/* Local */}
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="ml-2 text-sm">{campeonato.local}</span>
        </div>

        {/* Equipes */}
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4" />
          <span className="ml-2 text-sm">
            {campeonato.equipesInscritas} equipes inscritas
            {campeonato.vagasDisponiveis > 0 && (
              <span className="text-green-600 font-medium">
                {' '}• {campeonato.vagasDisponiveis} vagas disponíveis
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Descrição */}
      {campeonato.descricao && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {campeonato.descricao}
        </p>
      )}

      {/* Organizador */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="ml-2 text-xs">
            Organizado por {campeonato.organizador}
          </span>
        </div>
        
        {campeonato.status === 'Inscrições Abertas' && (
          <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
            Ver Detalhes
          </button>
        )}
      </div>

    </div>
  );
};

export default CampeonatoCard;

