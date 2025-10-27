// api.js
export default async function handler(req, res) {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
  const cidade = "São Paulo,BR";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`
    );
    const data = await response.json();

    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar dados do clima:', error);
    res.status(500).json({ error: 'Erro ao buscar dados do clima' });
  }
}

