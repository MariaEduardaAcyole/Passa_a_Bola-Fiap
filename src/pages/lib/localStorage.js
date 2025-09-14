// Utilitário para gerenciar dados no localStorage

const STORAGE_KEY = 'passa-a-bola-jogos';

// Função para gerar ID único
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Função para salvar um jogo no localStorage
export const saveJogo = (jogoData) => {
  try {
    // Recupera jogos existentes
    const jogosExistentes = getJogos();
    
    // Cria o novo jogo com ID único e timestamp
    const novoJogo = {
      id: generateId(),
      ...jogoData,
      dataCriacao: new Date().toISOString(),
      status: 'Inscrições Abertas', // Status padrão para jogos cadastrados
      equipesInscritas: 0,
      vagasDisponiveis: parseInt(jogoData.jogadoresPorTime) * 2 || 22, // Calcula vagas baseado nos jogadores
      organizador: 'Usuário do Sistema', // Organizador padrão
      contato: 'contato@passaabola.com' // Contato padrão
    };
    
    // Adiciona o novo jogo à lista
    const jogosAtualizados = [...jogosExistentes, novoJogo];
    
    // Salva no localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jogosAtualizados));
    
    return novoJogo;
  } catch (error) {
    console.error('Erro ao salvar jogo:', error);
    return null;
  }
};

// Função para recuperar todos os jogos do localStorage
export const getJogos = () => {
  try {
    const jogos = localStorage.getItem(STORAGE_KEY);
    return jogos ? JSON.parse(jogos) : [];
  } catch (error) {
    console.error('Erro ao recuperar jogos:', error);
    return [];
  }
};

// Função para limpar todos os jogos do localStorage
export const clearJogos = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Erro ao limpar jogos:', error);
    return false;
  }
};

// Função para remover um jogo específico
export const removeJogo = (jogoId) => {
  try {
    const jogosExistentes = getJogos();
    const jogosAtualizados = jogosExistentes.filter(jogo => jogo.id !== jogoId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jogosAtualizados));
    return true;
  } catch (error) {
    console.error('Erro ao remover jogo:', error);
    return false;
  }
};

// Função para converter dados do formulário para o formato de campeonato
export const formatJogoToCampeonato = (formData) => {
  return {
    nome: formData.nomeJogo,
    dataInicio: formData.data,
    dataFim: formData.data, // Para jogos únicos, data de início e fim são iguais
    local: formData.localJogo,
    modalidade: formData.tipoJogo,
    descricao: formData.observacoes || 'Jogo cadastrado pelo sistema Passa a Bola',
    jogadoresPorTime: formData.jogadoresPorTime,
    valorPorJogador: formData.valorPorJogador || '0.00',
    hora: formData.hora
  };
};

