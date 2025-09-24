//CardJogo.js
import Image from "next/image";

export default function CardJogo({ dia, mesAno, diaSemana, local, img }) {
  return (
        <div class="home-card">
            <img src="../img/campo.svg" alt="Imagem do campo"/>
            <div class="home-info">
              <p class="home-dia">{dia}</p>
              <p class="home-mes-ano">{mesAno}</p>
              <p class="home-dia-da-semana">{diaSemana}</p>
              <div class="home-localizacao">
                <img src="../img/pin-de-localizacao.svg" class="home-img-localizacao" alt="Localização"/>
                <span class="home-txt-localizacao">{local}</span>
              </div>
            </div>
          </div>
  );
}
