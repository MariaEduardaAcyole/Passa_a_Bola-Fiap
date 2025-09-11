import Image from "next/image";

export default function CardJogo({ dia, mesAno, diaSemana, local, img }) {
  return (
        <div class="card">
            <img src="../img/campo.svg" alt="Imagem do campo"/>
            <div class="info">
              <p class="dia">{dia}</p>
              <p class="mes-ano">{mesAno}</p>
              <p class="dia-da-semana">{diaSemana}</p>
              <div class="localizacao">
                <img src="../img/pin-de-localizacao.svg" class="img-localizacao" alt="Localização"/>
                <span class="txt-localizacao">{local}</span>
              </div>
            </div>
          </div>
  );
}
