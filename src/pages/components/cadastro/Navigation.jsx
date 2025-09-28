import React from "react";

export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "listar-campeonatos", label: "Campeonatos" },
    { key: "listar-jogos", label: "Jogos" },
    { key: "cadastrar-campeonato", label: "Novo Campeonato" },
    { key: "cadastrar-jogo", label: "Novo Jogo" },
  ];

  return (
    <div className="navigation-container">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`nav-button ${activeTab === tab.key ? "active" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
