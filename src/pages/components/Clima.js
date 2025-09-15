'use client'
import { useEffect, useState } from "react";

export default function Clima() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    async function fetchClima() {
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
      const cidade = "São Paulo,BR";

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`
        );
        const data = await res.json();
        setClima(data);
      } catch (err) {
        console.error("Erro ao buscar o clima:", err);
      }
    }

    fetchClima();
  console.log(process.env.NEXT_PUBLIC_OPENWEATHER_KEY);

  }, []);

  // Enquanto os dados não chegam
  if (!clima || !clima.weather) return <p>Carregando clima...</p>;

  return (
    <div className="container-clima">
      <h2>☀️🌡️ Clima 🌦️🌤️</h2>
      <h3>{clima.name}</h3>
      <p >{clima.weather[0].description}</p>
      <p className="clima-temperatura">{clima.main.temp}°C</p>
    </div>
  );
}
