"use client";

import { useEffect, useState } from "react";

// Dados mockados para fallback
const DADOS_MOCKADOS = {
  "jogos": [
    {
      "data": "18/06/2025 18:00",
      "mandante": "Grêmio",
      "placar": "1 x 1",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Flamengo"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "São Paulo",
      "placar": "1 x 0",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Internacional"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "Fluminense",
      "placar": "2 x 1",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Real Brasília FC"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "Sport Recife",
      "placar": "1 x 5",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Palmeiras"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "EC Bahia",
      "placar": "2 x 2",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "EC Juventude"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "Corinthians",
      "placar": "4 x 2",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Cruzeiro"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "América Mineiro",
      "placar": "1 x 0",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Ferroviária"
    },
    {
      "data": "18/06/2025 18:00",
      "mandante": "Red Bull Bragantino",
      "placar": "5 x 1",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "3B Sport"
    },
    {
      "data": "15/06/2025 21:00",
      "mandante": "Internacional",
      "placar": "0 x 5",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "Corinthians"
    },
    {
      "data": "15/06/2025 19:00",
      "mandante": "3B Sport",
      "placar": "0 x 4",
      "torneio": "Brasileirão Série A1, Feminino",
      "visitante": "EC Bahia"
    }
  ]
};

export default function UltimoResultado() {
  const [ultimosJogos, setUltimosJogos] = useState([]);
  const [usandoMock, setUsandoMock] = useState(false);

  useEffect(() => {
    async function fetchJogos() {
      try {
        const res = await fetch("http://localhost:8000/jogos", {
          signal: AbortSignal.timeout(3000) // timeout de 3 segundos
        });

        if (!res.ok) throw new Error("Erro na resposta da API");

        const data = await res.json();

        if (data.jogos && data.jogos.length > 0) {
          setUltimosJogos(data.jogos.slice(0, 10));
          setUsandoMock(false);
        } else {
          // Se não houver jogos, usa mock
          setUltimosJogos(DADOS_MOCKADOS.jogos.slice(0, 10));
          setUsandoMock(true);
        }
      } catch (error) {
        console.log("API não disponível, usando dados mockados:", error.message);
        // Usa dados mockados em caso de erro
        setUltimosJogos(DADOS_MOCKADOS.jogos.slice(0, 10));
        setUsandoMock(true);
      }
    }

    fetchJogos();
  }, []);

  return (
    <div className="home-container-resultado">
      <div className="home-caixa-ultimo-resultado">
        <img src="/img/icon-taca.png" className="home-icon-taca" alt="Taça" />
        <h2 className="text-xl font-bold mb-4 home-titulo-2 home-titulo-resultado">
          Últimos Jogos do Brasileirão Feminino
        </h2>

        {usandoMock && (
          <div style={{
            padding: '8px 12px',
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            marginBottom: '16px',
            fontSize: '14px',
            color: '#856404'
          }}>
            ⚠️ Exibindo dados mockados (API não disponível)
          </div>
        )}

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