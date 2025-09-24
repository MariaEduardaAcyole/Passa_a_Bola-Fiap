import { supabase } from '../../../lib/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, status } = req.body;

    if (!nome || !status) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const { data: campeonato, error } = await supabase
      .from('campeonatos')
      .insert([{ nome, status }])
      .select();

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json(campeonato[0]);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
