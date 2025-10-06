"use client";

import { useEffect, useState } from "react";


export default function UltimoResultado() {
  const [ultimosJogos, setUltimosJogos] = useState([]);

  useEffect(() => {
    async function fetchJogos() {
      try {
        const res = await fetch("http://localhost:8000/jogos");
        const data = await res.json();

        if (data.jogos && data.jogos.length > 0) {
          setUltimosJogos(data.jogos.slice(0, 10)); // só 10 jogos
        }
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    }

    fetchJogos();
  }, []);

  return (
    <div className="home-container-resultado">
      <div className="home-caixa-ultimo-resultado">
        <img src="/img/icon-taca.png" className="home-icon-taca" />
        <h2 className="text-xl font-bold mb-4 home-titulo-2 home-titulo-resultado">
          Últimos Jogos do Brasileirao Feminino
        </h2>

        {ultimosJogos.length > 0 ? (
          <div className="grid-jogos">
            {ultimosJogos.map((jogo, index) => (
              <div key={index} className="card-jogo">
                <div className="card-data">{jogo.data}</div>

                <div className="card-content">
                  <div className="time-nome time-mandante">
                    {jogo.mandante}
                  </div>

                  <div className="placar-box">
                    <div className="placar-texto">
                      {jogo.placar || "- x -"}
                    </div>
                  </div>

                  <div className="time-nome time-visitante">
                    {jogo.visitante}
                  </div>
                </div>

                <div className="card-footer">
                  <div className="barra-decorativa"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-texto">Carregando jogos...</p>
          </div>
        )}
      </div>
    </div>
  );
}