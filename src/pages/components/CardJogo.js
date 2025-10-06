// CardJogo.js - Versão moderna para Dashboard
import Image from "next/image";

export default function CardJogo({ dia, mesAno, diaSemana, local, img, status }) {
  return (
    <div className="home-card">
      {/* Badge de status (opcional) */}
      {status && (
        <div className="home-card-badge">
          {status}
        </div>
      )}
      
      <img src={img || "../img/campo.svg"} alt="Imagem do campo" />
      
      <div className="home-info">
        <p className="home-dia">{dia}</p>
        <p className="home-mes-ano">{mesAno}</p>
        <p className="home-dia-da-semana">{diaSemana}</p>
        
        <div className="home-localizacao">
          <img 
            src="../img/pin-de-localizacao.svg" 
            className="home-img-localizacao" 
            alt="Localização"
          />
          <span className="home-txt-localizacao">{local}</span>
        </div>
      </div>
    </div>
  );
}

// Exemplo de uso com status:
// <CardJogo 
//   dia="09" 
//   mesAno="Junho/2025" 
//   diaSemana="Domingo" 
//   local="Av das Nações Unidas" 
//   img="/img/campo.svg"
//   status="Confirmado" // opcional
// />