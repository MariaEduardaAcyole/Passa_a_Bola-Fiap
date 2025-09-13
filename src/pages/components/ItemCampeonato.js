"use client";
import { useState } from "react";

export default function ItemCampeonato() {
  const [participando, setParticipando] = useState(false);

  const handleParticipar = () => {
    setParticipando(true);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-2 w-full">
      <h2 className="text-lg font-bold">🏆 Copa Paulista Feminina</h2>
      <p>📅 10/10/2025 - 20/11/2025</p>
      <p>📍 São Paulo - Arena Barueri</p>
      <p>⚽ Times: Corinthians, Palmeiras, Ferroviária</p>

      {participando ? (
        <button
          disabled
          className="mt-3 px-4 py-2 bg-gray-400 text-white rounded-xl cursor-not-allowed"
        >
          ✅ Inscrito
        </button>
      ) : (
        <button
          onClick={handleParticipar}
          className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
        >
          Participar
        </button>
      )}
    </div>
  );
}
