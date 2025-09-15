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
      await new Promise(resolve => setTimeout(resolve, 1000));
      const jogoFormatado = formatJogoToCampeonato({
        nomeJogo: data.nomeJogo,
        data: data.dataJogo,
        hora: data.horaJogo,
        local: data.localJogo,
        tipo: data.tipoJogo,
        jogadoresPorTime: data.numeroJogadores,
        valorPorJogador: data.valorJogador,
        observacoes: data.observacoes
      });

      const jogoSalvo = saveJogo(jogoFormatado);
      if (jogoSalvo) {
        alert('Jogo cadastrado com sucesso! Você pode visualizá-lo na aba "Campeonatos".');
        reset();
      } else throw new Error('Falha ao salvar o jogo');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar jogo. Tente novamente.');
    }
  };

  return (
    <div className="listaJogos-corpo min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center py-6 bg- text-white shadow-md">
        <Trophy className="w-10 h-10 mb-2" />
        <h1 className="text-2xl font-bold">Passa a Bola</h1>
        <p className="text-sm mt-1">Cadastre seu jogo e chame a galera!</p>
      </div>

      {/* Formulário */}
      <div className="flex-grow flex justify-center px-4 py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-6"
        >
          {/* Nome do Jogo */}
          <div>
            <label className="block font-semibold mb-1 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-roxo-600" /> Nome do Jogo *
            </label>
            <input
              type="text"
              {...register('nomeJogo')}
              placeholder="Ex: Pelada do Sábado"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
            />
            {errors.nomeJogo && (
              <p className="text-red-500 text-sm mt-1">{errors.nomeJogo.message}</p>
            )}
          </div>

          {/* Data e Hora */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-roxo" /> Data *
              </label>
              <input
                type="date"
                {...register('dataJogo')}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
              />
              {errors.dataJogo && <p className="text-red-500 text-sm mt-1">{errors.dataJogo.message}</p>}
            </div>
            <div>
              <label className="block font-semibold mb-1 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-roxo-600" /> Hora *
              </label>
              <input
                type="time"
                {...register('horaJogo')}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
              />
              {errors.horaJogo && <p className="text-red-500 text-sm mt-1">{errors.horaJogo.message}</p>}
            </div>
          </div>

          {/* Local */}
          <div>
            <label className="block font-semibold mb-1 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-roxo" /> Local do Jogo *
            </label>
            <input
              type="text"
              {...register('localJogo')}
              placeholder="Ex: Campo do Clube, Quadra da Escola"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
            />
            {errors.localJogo && <p className="text-red-500 text-sm mt-1">{errors.localJogo.message}</p>}
          </div>

          {/* Tipo de Jogo */}
          <div>
            <label className="block font-semibold mb-1">Tipo de Jogo *</label>
            <select
              {...register('tipoJogo')}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
            >
              <option value="">Selecione o tipo de jogo</option>
              {tiposJogo.map((tipo) => (
                <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
              ))}
            </select>
            {errors.tipoJogo && <p className="text-red-500 text-sm mt-1">{errors.tipoJogo.message}</p>}
          </div>

          {/* Número de Jogadores e Valor */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 flex items-center">
                <Users className="w-5 h-5 mr-2 text-roxo" /> Jogadores/Time *
              </label>
              <input
                type="number"
                min="2"
                max="11"
                {...register('numeroJogadores', { valueAsNumber: true })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
              />
              {errors.numeroJogadores && <p className="text-red-500 text-sm mt-1">{errors.numeroJogadores.message}</p>}
            </div>

            <div>
              <label className="block font-semibold mb-1 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-roxo" /> Valor/Jogador
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                {...register('valorJogador', { valueAsNumber: true })}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
              />
              {errors.valorJogador && <p className="text-red-500 text-sm mt-1">{errors.valorJogador.message}</p>}
            </div>
          </div>

          {/* Observações */}
          <div>
            <label className="block font-semibold mb-1 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-roxo" /> Observações/Regras
            </label>
            <textarea
              rows="3"
              {...register('observacoes')}
              placeholder="Ex: Trazer água, chuteira obrigatória, etc."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-roxoForte focus:outline-none"
            />
            {errors.observacoes && <p className="text-red-500 text-sm mt-1">{errors.observacoes.message}</p>}
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-roxo-600 hover:bg-roxo disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar Jogo'}
            </button>
            <button
              type="button"
              onClick={reset}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-colors"
            >
              Limpar Formulário
            </button>
          </div>
        </form>
      </div>

      {/* Menu Inferior */}
      <div className="fixed bottom-0 left-0 w-full bg-roxoForte text-white shadow-lg">
        <MenuInferior />
      </div>
    </div>
  );
};

export default GameForm;
