import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header.js";
import Navigation from "../components/cadastro/Navigation.jsx";
import CampeonatosList from "../components/cadastro/CampeonatosList.jsx";
import JogosList from "../components/cadastro/JogosList.jsx";
import FormJogo from "../components/cadastro/FormJogo.jsx";
import FormCampeonato from "../components/cadastro/FormCampeonato.jsx";
import MenuInferior from "../components/MenuInferior.js";

export default function Cadastro() {
  const [activeTab, setActiveTab] = useState("listar-campeonatos");

  return (
    <>
      <Head>
        <title>Passa a Bola - Cadastro</title>
      </Head>

      <div
        className="min-h-screen text-white cadastro"
      >
        <Header />
        <div className="container mx-auto px-4 py-10 max-w-5xl">
          <div className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 cadastro-nav">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="mt-8">
            {activeTab === "listar-campeonatos" && <CampeonatosList />}
            {activeTab === "listar-jogos" && <JogosList />}
            {activeTab === "cadastrar-campeonato" && <FormCampeonato />}
            {activeTab === "cadastrar-jogo" && <FormJogo />}
          </div>
        </div>
      </div>

      <MenuInferior />
    </>
  );
}
