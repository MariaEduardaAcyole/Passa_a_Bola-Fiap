//Header.js
'use client'
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
    "/listaCampeonatos":"Campeonatos",
    "/Cadastro":"Cadastro Jogos e Campeonatos",
    "/detalhes-jogo/1":"Detalhes",
    "/listaCampeonatos":"Campeonatos",

  };
    const title = titles[path] || "Aplicativo";


    return (
        <header className="mb-12 Header-header">
    
                <img width={36} height={36} src="/img/logopassabola - semtexto.png" />
                <h1 className="text-xl font-bold Header-titulo-header">{title}</h1>
                <img src="/img/sininho.png" alt="Notificações" width={24} height={24} />

        </header>
    )


}