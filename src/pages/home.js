// home.js
import CardJogo from "../pages/components/CardJogo";
import UltimoResultado from "../pages/components/UltimoResultado";
import MenuInferior from "../pages/components/MenuInferior";
import Header from "../pages/components/Header";
import Clima from "../pages/components/Clima";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const jogos = [
    { dia: "09", mesAno: "Junho/2025", diaSemana: "Domingo", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "10", mesAno: "Junho/2025", diaSemana: "Segunda", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "11", mesAno: "Junho/2025", diaSemana: "Terça", local: "Av das Nações Unidas", img: "/img/campo.svg" },
    { dia: "12", mesAno: "Junho/2025", diaSemana: "Quarta", local: "Av das Nações Unidas", img: "/img/campo.svg" },
  ];

  const handleFeedClick = () => {
    router.push('/feed');
  };

  return (
    <>
      <style>{`
        /* Reset e Base */
        .home-dashboard {
          width? 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f3ff 0%, #ffffff 50%, #fdf2f8 100%);
          padding-bottom: 80px;
        }

        /* Header Moderno */
        .home-header-wrapper {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          padding: 32px 20px 100px 20px;
          border-radius: 0 0 32px 32px;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
          margin-bottom: -60px;
          position: relative;
        }

        /* Título Principal */
        .home-hero-title {
          color: white;
          font-size: 24px;
          font-weight: 700;
          line-height: 1.3;
          margin: 20px 0 8px 0;
          text-align: left;
        }

        .home-hero-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: 14px;
          margin-bottom: 20px;
        }

        /* Container Principal */
        .home-main-content {
          padding: 0 16px;
          position: relative;
          z-index: 2;
        }

        /* Card de Clima Moderno */
        .home-clima-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 20px;
          border: 1px solid rgba(124, 58, 237, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .home-clima-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        /* Grid de Estatísticas */
        .home-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .home-stat-card {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 20px;
          padding: 20px;
          color: white;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
          transition: transform 0.3s ease;
        }

        .home-stat-card:nth-child(2) {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }

        .home-stat-card:hover {
          transform: translateY(-4px);
        }

        .home-stat-icon {
          font-size: 28px;
          margin-bottom: 8px;
          display: block;
        }

        .home-stat-number {
          font-size: 32px;
          font-weight: 700;
          margin: 8px 0 4px 0;
        }

        .home-stat-label {
          font-size: 12px;
          opacity: 0.85;
          font-weight: 500;
        }

        /* Seção de Títulos */
        .home-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .home-section-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .home-section-icon {
          color: #7c3aed;
          font-size: 20px;
        }

        /* Carrossel de Jogos Moderno */
        .home-jogos-container {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 4px 4px 12px 4px;
          margin-bottom: 32px;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .home-jogos-container::-webkit-scrollbar {
          height: 6px;
        }

        .home-jogos-container::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 10px;
          margin: 0 4px;
        }

        .home-jogos-container::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          border-radius: 10px;
        }

        .home-jogos-container > * {
          scroll-snap-align: start;
          flex-shrink: 0;
        }

        /* Card de Jogo Moderno */
        .home-card {
          background: white;
          border-radius: 20px;
          width: 160px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: all 0.3s ease;
          border: 2px solid rgba(124, 58, 237, 0.1);
          position: relative;
        }

        .home-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(124, 58, 237, 0.2);
          border-color: #7c3aed;
        }

        .home-card img {
          width: 100%;
          height: 100px;
          object-fit: cover;
          border-radius: 0;
        }

        .home-info {
          padding: 16px 12px;
          background: white;
        }

        .home-dia {
          color: #7c3aed;
          font-size: 32px;
          font-weight: 700;
          line-height: 1;
          margin: 0 0 4px 0;
          text-align: center;
        }

        .home-mes-ano {
          color: #6b7280;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
          margin: 0 0 8px 0;
          letter-spacing: 0.5px;
        }

        .home-dia-da-semana {
          color: #374151;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
          margin: 0 0 12px 0;
          padding-bottom: 12px;
          border-bottom: 1px solid #f3f4f6;
        }

        .home-localizacao {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          justify-content: center;
        }

        .home-img-localizacao {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          object-fit: contain;
        }

        .home-txt-localizacao {
          color: #6b7280;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 500;
          text-align: center;
        }

        /* Badge de status (opcional - adicionar depois) */
        .home-card-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(124, 58, 237, 0.9);
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        /* Seção de Clima */
        .home-clima-section {
          margin-bottom: 32px;
        }

        /* Card de Resultados */
        .home-resultados-wrapper {
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-bottom: 24px;
          border: 1px solid rgba(124, 58, 237, 0.1);
        }

        .home-resultados-header {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 16px;
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
        }

        /* Cards de resultado - 1 por linha, horizontal */
        .home-resultados-wrapper .resultado-card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 16px;
          padding: 16px;
          margin-bottom: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.3s ease;
          width: 100%;
        }

        .home-resultados-wrapper .resultado-card:hover {
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
          border-color: #e9d5ff;
          transform: translateY(-2px);
        }

        .home-resultados-wrapper .resultado-card:last-child {
          margin-bottom: 0;
        }

        /* Layout horizontal: Time1 - Placar - Time2 */
        .home-resultados-wrapper .resultado-jogo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .home-resultados-wrapper .resultado-nome {
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          flex: 1;
          text-align: left;
        }

        .home-resultados-wrapper .resultado-nome-direita {
          text-align: right;
        }

        .home-resultados-wrapper .resultado-placar-box {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: white;
          font-weight: 700;
          padding: 8px 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .home-resultados-wrapper .resultado-placar-numero {
          font-size: 16px;
        }

        .home-resultados-wrapper .resultado-placar-separador {
          font-size: 12px;
          opacity: 0.7;
        }

        .home-resultados-wrapper .resultado-data {
          text-align: center;
          color: #9ca3af;
          font-size: 11px;
          font-weight: 500;
          padding-top: 10px;
          border-top: 1px solid #f3f4f6;
        }

        /* Feed CTA Moderno */
        .home-feed-cta {
          background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.3);
          margin-bottom: 24px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          width: 100%;
        }

        .home-feed-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(124, 58, 237, 0.4);
        }

        .home-feed-cta:active {
          transform: translateY(-2px);
        }

        .home-feed-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .home-feed-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: white;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }

        .home-feed-badge {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 10px 20px;
          color: white;
          font-weight: 600;
          font-size: 15px;
          display: inline-block;
          position: relative;
          z-index: 1;
        }

        /* Responsividade */
        @media (min-width: 768px) {
          .home-dashboard {
            max-width: 100%;
            margin: 0 auto;
          }

          .home-hero-title {
            font-size: 28px;
          }

          .home-section-title {
            font-size: 22px;
          }
        }

        /* Animações suaves */
        .home-clima-card,
        .home-jogos-container > *,
        .home-resultados-wrapper {
          animation: fadeInUp 0.6s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Ocultar imagem da capa original */
        .home-img-capa {
          display: none;
        }
      `}</style>

      <div className="home-dashboard">
        <div className="home-header-wrapper">

          <h1 className="home-hero-title">
            Já entrou no time! ⚽
          </h1>
          <p className="home-hero-subtitle">
            Agora entre em campo 🏟️
          </p>
        </div>

        <div className="home-main-content">
          {/* Grid de Estatísticas */}
          <div className="home-stats-grid">
            <div className="home-stat-card">
              <span className="home-stat-icon">🏆</span>
              <div className="home-stat-number">8</div>
              <div className="home-stat-label">Vitórias</div>
            </div>
            <div className="home-stat-card">
              <span className="home-stat-icon">📊</span>
              <div className="home-stat-number">12</div>
              <div className="home-stat-label">Jogos</div>
            </div>
          </div>

          {/* Clima */}
          <div className="home-clima-section">
            <div className="home-clima-card">
              <Clima />
            </div>
          </div>

          {/* Próximos Jogos */}
          <div className="home-section-header">
            <h2 className="home-section-title">Próximos Jogos</h2>
            <span className="home-section-icon">➡️</span>
          </div>

          <div className="home-jogos-container">
            {jogos.map((jogo, index) => (
              <CardJogo key={index} {...jogo} />
            ))}
          </div>

          {/* Radar Seleção */}
          <div className="home-section-header">
            <h2 className="home-section-title">Radar Seleção</h2>
            <span className="home-section-icon">🏆</span>
          </div>

          <div className="home-resultados-wrapper">
            <div className="home-resultados-header">
              <span>🏆</span>
              <span>Últimos Jogos do Brasileirão Feminino</span>
            </div>
            <UltimoResultado />
          </div>

          {/* Feed CTA */}
          <button onClick={handleFeedClick} className="home-feed-cta">
            <div className="home-feed-title">
              <span>Acesse o Feed</span>
              <span>✨</span>
            </div>
            <div className="home-feed-badge">
              20 Novos Posts
            </div>
          </button>
        </div>


      </div>
      <MenuInferior />
    </>
  );
}