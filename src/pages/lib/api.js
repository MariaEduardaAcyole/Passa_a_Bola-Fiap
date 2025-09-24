import { supabase } from '../../../lib/supabaseClient';

// Buscar campeonatos
export async function getCampeonatos() {
  const { data, error } = await supabase
    .from('campeonatos')
    .select('*')
    .order('nome', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

// Buscar jogos
export async function getJogos() {
  const { data, error } = await supabase
    .from('jogos')
    .select('*')
    .order('nome_jogos', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}