import React from 'react';
import { Plus, Trophy, Home } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = [
    {
      id: 'campeonatos',
      label: 'Campeonatos',
      icon: Trophy,
      description: 'Ver próximos campeonatos'
    },
    {
      id: 'cadastrar',
      label: 'Cadastrar Jogo',
      icon: Plus,
      description: 'Criar novo jogo'
    }
  ];

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                  isActive
                    ? 'bg-white text-roxo border-b-2 border-roxo'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;

