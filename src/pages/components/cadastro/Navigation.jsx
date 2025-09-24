import React from "react";

export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "listar-campeonatos", label: "Campeonatos" },
    { key: "listar-jogos", label: "Jogos" },
    { key: "cadastrar-campeonato", label: "Novo Campeonato" },
    { key: "cadastrar-jogo", label: "Novo Jogo" },
  ];

  return (
    <div className="flex gap-3 border-b border-gray-300 pb-2 mb-6 cadastro-itens-menu">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === tab.key
              ? "text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          style={{
            backgroundColor:
              activeTab === tab.key ? "var(--roxo)" : "var(--roxo-light)",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
