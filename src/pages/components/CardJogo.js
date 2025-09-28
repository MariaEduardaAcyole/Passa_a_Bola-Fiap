//CardJogo.js
import Image from "next/image";

export default function CardJogo({ dia, mesAno, diaSemana, local, img }) {
  return (
        <div className="home-card">
            <img src="../img/campo.svg" alt="Imagem do campo"/>
            <div className="home-info">
              <p className="home-dia">{dia}</p>
              <p className="home-mes-ano">{mesAno}</p>
              <p className="home-dia-da-semana">{diaSemana}</p>
              <div className="home-localizacao">
                <img src="../img/pin-de-localizacao.svg" className="home-img-localizacao" alt="Localização"/>
                <span className="home-txt-localizacao">{local}</span>
              </div>
            </div>
          </div>
  );
}
