import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { gameFormSchema, tiposJogo } from '../../lib/validationSchema';
import { saveJogo, formatJogoToCampeonato } from '../../lib/localStorage';
import { Calendar, Clock, MapPin, Users, DollarSign, FileText, Trophy } from 'lucide-react';
import MenuInferior from '../MenuInferior';


const GameForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(gameFormSchema),
    defaultValues: {
      nomeJogo: '',
      dataJogo: '',
      horaJogo: '',
      localJogo: '',
      tipoJogo: '',
      numeroJogadores: 5,
      valorJogador: '',
      observacoes: ''
    }
  });

  const onSubmit = async (data) => {
    try {
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Dados do jogo:', data);
      
      // Formatar dados para o formato de campeonato
      const jogoFormatado = formatJogoToCampeonato({
        nomeJogo: data.nomeJogo,
        data: data.dataJogo,
        hora: data.horaJogo,
        localJogo: data.localJogo,
        tipoJogo: data.tipoJogo,
        jogadoresPorTime: data.numeroJogadores,
        valorPorJogador: data.valorJogador,
        observacoes: data.observacoes
      });
      
      // Salvar no localStorage
      const jogoSalvo = saveJogo(jogoFormatado);
      
      if (jogoSalvo) {
        alert('Jogo cadastrado com sucesso! Você pode visualizá-lo na aba "Campeonatos".');
        reset();
      } else {
        throw new Error('Falha ao salvar o jogo');
      }
    } catch (error) {
      console.error('Erro ao cadastrar jogo:', error);
      alert('Erro ao cadastrar jogo. Tente novamente.');
    }
  };

  const handleClear = () => {
    reset();
  };

  return (
    <div className="mobile-form-container">
      <div className="mobile-form-card">
        <div className="mobile-form-header">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-8 h-8 text-green-600 mr-2" />
            <h1 className="mobile-form-title">Passa a Bola</h1>
          </div>
          <p className="mobile-form-subtitle">Cadastre seu jogo e chame a galera!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nome do Jogo */}
          <div className="mobile-form-field">
            <label className="mobile-form-label flex items-center">
              <Trophy className="w-4 h-4 mr-2" />
              Nome do Jogo *
            </label>
            <input
              type="text"
              className="mobile-form-input"
              placeholder="Ex: Pelada do Sábado"
              {...register('nomeJogo')}
            />
            {errors.nomeJogo && (
              <p className="mobile-form-error">{errors.nomeJogo.message}</p>
            )}
          </div>

          {/* Data e Hora */}
          <div className="mobile-form-grid-2">
            <div className="mobile-form-field">
              <label className="mobile-form-label flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Data *
              </label>
              <input
                type="date"
                className="mobile-form-input"
                {...register('dataJogo')}
              />
              {errors.dataJogo && (
                <p className="mobile-form-error">{errors.dataJogo.message}</p>
              )}
            </div>

            <div className="mobile-form-field">
              <label className="mobile-form-label flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Hora *
              </label>
              <input
                type="time"
                className="mobile-form-input"
                {...register('horaJogo')}
              />
              {errors.horaJogo && (
                <p className="mobile-form-error">{errors.horaJogo.message}</p>
              )}
            </div>
          </div>

          {/* Local */}
          <div className="mobile-form-field">
            <label className="mobile-form-label flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Local do Jogo *
            </label>
            <input
              type="text"
              className="mobile-form-input"
              placeholder="Ex: Campo do Clube, Quadra da Escola"
              {...register('localJogo')}
            />
            {errors.localJogo && (
              <p className="mobile-form-error">{errors.localJogo.message}</p>
            )}
          </div>

          {/* Tipo de Jogo */}
          <div className="mobile-form-field">
            <label className="mobile-form-label">
              Tipo de Jogo *
            </label>
            <select
              className="mobile-form-select"
              {...register('tipoJogo')}
            >
              <option value="">Selecione o tipo de jogo</option>
              {tiposJogo.map((tipo) => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
            {errors.tipoJogo && (
              <p className="mobile-form-error">{errors.tipoJogo.message}</p>
            )}
          </div>

          {/* Número de Jogadores e Valor */}
          <div className="mobile-form-grid-2">
            <div className="mobile-form-field">
              <label className="mobile-form-label flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Jogadores/Time *
              </label>
              <input
                type="number"
                min="2"
                max="11"
                className="mobile-form-input"
                {...register('numeroJogadores', { valueAsNumber: true })}
              />
              {errors.numeroJogadores && (
                <p className="mobile-form-error">{errors.numeroJogadores.message}</p>
              )}
            </div>

            <div className="mobile-form-field">
              <label className="mobile-form-label flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Valor/Jogador
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="mobile-form-input"
                placeholder="0.00"
                {...register('valorJogador', { valueAsNumber: true })}
              />
              {errors.valorJogador && (
                <p className="mobile-form-error">{errors.valorJogador.message}</p>
              )}
            </div>
          </div>

          {/* Observações */}
          <div className="mobile-form-field">
            <label className="mobile-form-label flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Observações/Regras
            </label>
            <textarea
              rows="3"
              className="mobile-form-textarea"
              placeholder="Ex: Trazer água, chuteira obrigatória, etc."
              {...register('observacoes')}
            />
            {errors.observacoes && (
              <p className="mobile-form-error">{errors.observacoes.message}</p>
            )}
          </div>

          {/* Botões */}
         <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isSubmitting ? 'Cadastrando...' : 'Cadastrar Jogo'}
                </button>
                
                <button
                  type="button"
                  onClick={handleClear}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Limpar Formulário
                </button>
            </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-purple-800 text-white p-4 flex justify-around shadow-lg">
          <MenuInferior />
      </div>
    </div>
    
  );
};

export default GameForm;

