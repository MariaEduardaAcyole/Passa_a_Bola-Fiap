"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const path = usePathname();

  const titles = {
    "/home": "Home",
    "/perfil": "Perfil",
    "/listaJogosEditar": "Jogos",
    "/configuracoes": "Configurações",
    "/feed": "Feed",
    "/listaCampeonatos": "Campeonatos",
    "/Cadastro": "Cadastro Jogos e Campeonatos",
    "/detalhes-jogo/1": "Detalhes",
    "/listaCampeonatos": "Campeonatos",
  };
  const title = titles[path] || "Aplicativo";

  return (
    <header className="mb-12 Header-header">
      <img width={36} height={36} src="/img/logopassabola - semtexto.png" />
      <h1 className="text-xl font-bold Header-titulo-header">{title}</h1>

      <nav className="menu-hamburguer">
        <input type="checkbox" id="menu-toggle" />
        <label for="menu-toggle" className="menu-icon">
          ☰
        </label>

        <ul className="menu-links">
          <li>
            <a href="/home">
              <img src="/img/icon-home.png" className="header-icon"></img>
              Home
            </a>
          </li>
          <li>
            <a href="/perfil">
              <img src="/img/icon-perfil.png" className="header-icon"></img>
              Perfil
            </a>
          </li>
          <li>
            <a href="/Cadastro">
              <img src="/img/icon-config.png" className="header-icon"></img>
              Cadastros
            </a>{" "}
          </li>
            <li>
            <a href="/feed">
              <img src="/img/icon-estrela.png" className="header-icon"></img>
              Feed
            </a>{" "}
          </li>
            <li>
            <a href="/jogos">
              <img src="/img/icon-campo.png" className="header-icon"></img>
              Jogos
            </a>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
