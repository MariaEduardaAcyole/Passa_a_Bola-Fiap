"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
      <Image 
        width={36} 
        height={36} 
        src="/img/logopassabola - semtexto.png" 
        alt="Logo Passabola"
      />
      <h1 className="text-xl font-bold Header-titulo-header">{title}</h1>

      <nav className="menu-hamburguer">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          ☰
        </label>

        <ul className="menu-links">
          <li>
            <Link href="/home">
              <Image 
                src="/img/icon-home.png" 
                className="header-icon" 
                alt="Home"
                width={24}
                height={24}
              />
              Home
            </Link>
          </li>
          <li>
            <Link href="/perfil">
              <Image 
                src="/img/icon-perfil.png" 
                className="header-icon" 
                alt="Perfil"
                width={24}
                height={24}
              />
              Perfil
            </Link>
          </li>
          <li>
            <Link href="/Cadastro">
              <Image 
                src="/img/icon-config.png" 
                className="header-icon" 
                alt="Cadastros"
                width={24}
                height={24}
              />
              Cadastros
            </Link>
          </li>
          <li>
            <Link href="/feed">
              <Image 
                src="/img/icon-estrela.png" 
                className="header-icon" 
                alt="Feed"
                width={24}
                height={24}
              />
              Feed
            </Link>
          </li>
          <li>
            <Link href="/jogos">
              <Image 
                src="/img/icon-campo.png" 
                className="header-icon" 
                alt="Jogos"
                width={24}
                height={24}
              />
              Jogos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}