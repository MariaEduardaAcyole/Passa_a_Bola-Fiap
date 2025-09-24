// api.js
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;
const cidade = "São Paulo,BR";
const res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${API_KEY}`
);
const data = await res.json();
console.log(data);
