'use client'

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function ItemListaJogos() {
  return (
    <div className="listaJogos-card-jogos-criado">
      <div className="listaJogos-infos">
        <p class="listaJogos-dia">09</p>
        <p class="listaJogos-mes-ano">Outubro/2025</p>
        <p class="listaJogos-dia-da-semana">Domingo</p>
        <p class="listaJogos-hora">19h</p>

      </div>
      <p class="listaJogos-localizacao">Av. Futebolistica 111 - Tatuapé</p>
      <img className="listaJogos-img-campo" src="/img/campo.svg" />
    </div>
  );
}