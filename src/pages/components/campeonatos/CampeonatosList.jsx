// CampeonatosList
import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Trophy, Calendar } from 'lucide-react';
import CampeonatoCard from './CampeonatoCard';
import { mockCampeonatos, modalidades, statusOptions } from '../../lib/mockData';
import { getJogos } from '../../lib/localStorage';
import MenuInferior from '../MenuInferior';

const CampeonatosList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModalidade, setSelectedModalidade] = useState('todos');
  const [selectedStatus, setSelectedStatus] = useState('todos');
  const [showFilters, setShowFilters] = useState(false);
  const [jogosCadastrados, setJogosCadastrados] = useState([]);

  // Carregar jogos do localStorage quando o componente montar
  useEffect(() => {
    const jogos = getJogos();
    setJogosCadastrados(jogos);
  }, []);

  // Combinar jogos cadastrados com dados mock
  const todosCampeonatos = useMemo(() => {
    return [...jogosCadastrados, ...mockCampeonatos];
  }, [jogosCadastrados]);

  // Filtrar campeonatos baseado nos critérios
  const filteredCampeonatos = useMemo(() => {
    return todosCampeonatos.filter(campeonato => {
      const matchesSearch = campeonato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           campeonato.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           campeonato.organizador.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesModalidade = selectedModalidade === 'todos' || campeonato.modalidade === selectedModalidade;
      const matchesStatus = selectedStatus === 'todos' || campeonato.status === selectedStatus;
      
      return matchesSearch && matchesModalidade && matchesStatus;
    });
  }, [todosCampeonatos, searchTerm, selectedModalidade, selectedStatus]);

  // Separar campeonatos por status para melhor organização
  const campeonatosAbertos = filteredCampeonatos.filter(c => c.status === 'Inscrições Abertas');
  const campeonatosAndamento = filteredCampeonatos.filter(c => c.status === 'Em Andamento');
  const campeonatosFinalizados = filteredCampeonatos.filter(c => c.status === 'Finalizado');

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedModalidade('todos');
    setSelectedStatus('todos');
  };

  return (
    <div className="mobile-form-container">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="mobile-form-header mb-6">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-8 h-8 text-roxo mr-2" />
            <h1 className="mobile-form-title">Próximos Campeonatos</h1>
          </div>
          <p className="mobile-form-subtitle">Encontre e participe dos melhores campeonatos da região!</p>
        </div>

        {/* Barra de Pesquisa */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar campeonatos, locais ou organizadores..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Botão de Filtros */}
        <div className="mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtros
            {(selectedModalidade !== 'todos' || selectedStatus !== 'todos') && (
              <span className="ml-2 px-2 py-1 bg-roxo text-roxo text-xs rounded-full">
                Ativos
              </span>
            )}
          </button>
        </div>

        {/* Painel de Filtros */}
        {showFilters && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Filtro por Modalidade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Modalidade
                </label>
                <select
                  value={selectedModalidade}
                  onChange={(e) => setSelectedModalidade(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo focus:border-transparent"
                >
                  {modalidades.map((modalidade) => (
                    <option key={modalidade.value} value={modalidade.value}>
                      {modalidade.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filtro por Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-roxo  focus:border-transparent"
                >
                  {statusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botão Limpar Filtros */}
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        )}

        {/* Resultados */}
        <div className="space-y-6">
          {/* Campeonatos com Inscrições Abertas */}
          {campeonatosAbertos.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-roxo" />
                Inscrições Abertas ({campeonatosAbertos.length})
              </h2>
              <div className="space-y-4">
                {campeonatosAbertos.map((campeonato) => (
                  <CampeonatoCard key={campeonato.id} campeonato={campeonato} />
                ))}
              </div>
            </div>
          )}

          {/* Campeonatos em Andamento */}
          {campeonatosAndamento.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                Em Andamento ({campeonatosAndamento.length})
              </h2>
              <div className="space-y-4">
                {campeonatosAndamento.map((campeonato) => (
                  <CampeonatoCard key={campeonato.id} campeonato={campeonato} />
                ))}
              </div>
            </div>
          )}

          {/* Campeonatos Finalizados */}
          {campeonatosFinalizados.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-gray-600" />
                Finalizados ({campeonatosFinalizados.length})
              </h2>
              <div className="space-y-4">
                {campeonatosFinalizados.map((campeonato) => (
                  <CampeonatoCard key={campeonato.id} campeonato={campeonato} />
                ))}
              </div>
            </div>
          )}

          {/* Estado Vazio */}
          {filteredCampeonatos.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum campeonato encontrado
              </h3>
              <p className="text-gray-600 mb-4">
                Tente ajustar os filtros ou termos de busca para encontrar campeonatos.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-roxo-600 text-white rounded-lg hover:bg-roxo transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-purple-800 text-white p-4 flex justify-around shadow-lg">
                <MenuInferior />
            </div>
    </div>
  );
};

export default CampeonatosList;

