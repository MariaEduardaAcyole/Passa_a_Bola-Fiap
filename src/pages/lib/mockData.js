// Dados mock para simular campeonatos
export const mockCampeonatos = [
  {
    id: "1",
    nome: "Copa Verão 2025",
    dataInicio: "2025-01-15",
    dataFim: "2025-02-28",
    local: "Complexo Esportivo Municipal",
    modalidade: "Futsal",
    organizador: "Liga Esportiva da Cidade",
    descricao: "Campeonato de futsal com equipes amadoras e premiação para os três primeiros lugares.",
    status: "Inscrições Abertas",
    equipesInscritas: 12,
    vagasDisponiveis: 4,
    contato: "contato@ligaesportiva.com"
  },
  {
    id: "2",
    nome: "Torneio de Futebol Society",
    dataInicio: "2025-02-10",
    dataFim: "2025-03-15",
    local: "Centro Esportivo São Paulo",
    modalidade: "Society",
    organizador: "Associação de Futebol Society",
    descricao: "Torneio aberto para equipes de society com jogos aos finais de semana.",
    status: "Inscrições Abertas",
    equipesInscritas: 8,
    vagasDisponiveis: 8,
    contato: "society@esporte.com"
  },
  {
    id: "3",
    nome: "Campeonato Regional de Campo",
    dataInicio: "2025-03-01",
    dataFim: "2025-05-30",
    local: "Estádio Municipal",
    modalidade: "Futebol de Campo",
    organizador: "Federação Regional",
    descricao: "Campeonato oficial com equipes da região metropolitana.",
    status: "Em Andamento",
    equipesInscritas: 16,
    vagasDisponiveis: 0,
    contato: "federacao@futebol.org"
  },
  {
    id: "4",
    nome: "Liga Jovem de Futsal",
    dataInicio: "2025-01-20",
    dataFim: "2025-04-20",
    local: "Ginásio Poliesportivo",
    modalidade: "Futsal",
    organizador: "Instituto Jovem Esporte",
    descricao: "Campeonato para jovens de 16 a 21 anos com foco no desenvolvimento esportivo.",
    status: "Inscrições Abertas",
    equipesInscritas: 6,
    vagasDisponiveis: 10,
    contato: "jovem@instituto.org"
  },
  {
    id: "5",
    nome: "Copa de Inverno 2024",
    dataInicio: "2024-06-15",
    dataFim: "2024-08-30",
    local: "Complexo Esportivo Central",
    modalidade: "Society",
    organizador: "Liga Municipal",
    descricao: "Campeonato já finalizado com grande participação da comunidade.",
    status: "Finalizado",
    equipesInscritas: 20,
    vagasDisponiveis: 0,
    contato: "liga@municipal.gov"
  },
  {
    id: "6",
    nome: "Torneio Relâmpago",
    dataInicio: "2025-02-01",
    dataFim: "2025-02-02",
    local: "Arena Esportiva",
    modalidade: "Futsal",
    organizador: "Arena Sports",
    descricao: "Torneio de fim de semana com jogos rápidos e premiação imediata.",
    status: "Inscrições Abertas",
    equipesInscritas: 4,
    vagasDisponiveis: 4,
    contato: "arena@sports.com"
  }
];

export const modalidades = [
  { value: "todos", label: "Todas as Modalidades" },
  { value: "Futsal", label: "Futsal" },
  { value: "Society", label: "Society" },
  { value: "Futebol de Campo", label: "Futebol de Campo" }
];

export const statusOptions = [
  { value: "todos", label: "Todos os Status" },
  { value: "Inscrições Abertas", label: "Inscrições Abertas" },
  { value: "Em Andamento", label: "Em Andamento" },
  { value: "Finalizado", label: "Finalizado" }
];

