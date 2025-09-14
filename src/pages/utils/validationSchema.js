import { z } from 'zod';

export const gameFormSchema = z.object({
  nomeJogo: z
    .string()
    .min(3, 'Nome do jogo deve ter pelo menos 3 caracteres')
    .max(100, 'Nome do jogo deve ter no máximo 100 caracteres')
    .nonempty('Nome do jogo é obrigatório'),
  
  dataJogo: z
    .string()
    .nonempty('Data do jogo é obrigatória')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'A data do jogo não pode ser no passado'),
  
  horaJogo: z
    .string()
    .nonempty('Hora do jogo é obrigatória')
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Formato de hora inválido (HH:MM)'),
  
  localJogo: z
    .string()
    .min(3, 'Local do jogo deve ter pelo menos 3 caracteres')
    .max(200, 'Local do jogo deve ter no máximo 200 caracteres')
    .nonempty('Local do jogo é obrigatório'),
  
  tipoJogo: z
    .string()
    .nonempty('Tipo de jogo é obrigatório'),
  
  numeroJogadores: z
    .number()
    .min(2, 'Mínimo de 2 jogadores por time')
    .max(11, 'Máximo de 11 jogadores por time')
    .int('Número de jogadores deve ser um número inteiro'),
  
  valorJogador: z
    .number()
    .min(0, 'Valor não pode ser negativo')
    .optional()
    .or(z.literal('')),
  
  observacoes: z
    .string()
    .max(500, 'Observações devem ter no máximo 500 caracteres')
    .optional()
});

export const tiposJogo = [
  { value: 'futebol-campo', label: 'Futebol de Campo' },
  { value: 'futsal', label: 'Futsal' },
  { value: 'society', label: 'Society' },
  { value: 'outro', label: 'Outro' }
];

