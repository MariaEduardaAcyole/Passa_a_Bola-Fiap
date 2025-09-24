//ItemCampeonato.js
"use client";
import { useState } from "react";

export default function ItemCampeonato() {
  const [participando, setParticipando] = useState(false);

  const handleParticipar = () => {
    setParticipando(true);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 m-2 w-full listaCampeonatos-card-campeonato-criado">
      <h2 className="text-lg font-bold listaCampeonatos-nome-campeonato"> Copa Paulista Feminina</h2>
      <p className="listaCampeonatos-data">
        <img src="/img/icon-calendario.png" className="itemCampeonato-icon"/>
        10/10/2025 - 20/11/2025</p>
      <p className="listaCampeonatos-localizacao">
        <img src="/img/pin-de-localizacao.svg"/>
        São Paulo - Arena Barueri</p>

      {participando ? (
        <button
          disabled
          className="listaCampeonatos-btn-inscrito"
        >
          Inscrito
        </button>
      ) : (
        <button
          onClick={handleParticipar}
          className="listaCampeonatos-btn-participar"
        >
          Participar
        </button>
      )}
    </div>
  );
}
