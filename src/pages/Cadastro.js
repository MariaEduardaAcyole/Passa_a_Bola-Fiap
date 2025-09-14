import React, { useState } from 'react';
import Head from 'next/head';
import Navigation from './components/layout/Navigation.jsx';
import CampeonatosList from './components/campeonatos/CampeonatosList.jsx';
import GameForm from './components/forms/GameForm.jsx';

export default function Home() {
  const [activeTab, setActiveTab] = useState('campeonatos');

  return (
    <>
      <Head>
        <title>Passa a Bola - Cadastro de Jogos</title>
        <meta name="description" content="Plataforma para cadastro de jogos e visualização de campeonatos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="mt-8">
            {activeTab === 'campeonatos' && <CampeonatosList />}
            {activeTab === 'cadastrar' && <GameForm />}
          </div>
        </div>
      </div>
    </>
  );
}

