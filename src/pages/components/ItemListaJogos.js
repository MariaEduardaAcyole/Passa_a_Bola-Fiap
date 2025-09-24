//ItemListaJogos.js
"use client";

import { useRouter } from "next/navigation";

export default function ItemListaJogos({ id }) {
  const router = useRouter();

  const irParaDetalhes = () => {
    router.push(`/detalhes-jogo/${id}`);
  };

  return (
    <div className="listaJogos-card-jogos-criado">
      <div className="listaJogos-infos">
        <p className="listaJogos-dia">09</p>
        <p className="listaJogos-mes-ano">Outubro/2025</p>
        <p className="listaJogos-dia-da-semana">Domingo</p>
        <p className="listaJogos-hora">19h</p>
      </div>

      <p className="listaJogos-localizacao">Av. Futebolistica 111 - Tatuapé</p>
      <img className="listaJogos-img-campo" src="/img/campo.svg" />

      {/* Botão para ir até os detalhes */}
      <button className="listaJogos-botao-editar icon-lapis" onClick={irParaDetalhes}>
        <img src="/img/icon-lapis.png" className="listaJogos-img-icon-lapis" />
      </button>
    </div>
  );
}
