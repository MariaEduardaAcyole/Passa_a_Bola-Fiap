import { supabase } from '../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, data, local } = req.body;

    if (!nome || !data || !local) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const { data: jogo, error } = await supabase
      .from('jogos')
      .insert([{ nome_jogo, data_jogo, local, }])
      .select();

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json(jogo[0]);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
