//MenuInferior.js
import Link from "next/link";

export default function MenuInferior() {
  return (
    <nav className="MenuInferior-nav-inferior">
      <Link href="../Cadastro"><img src="/img/icon-campo.png" alt="Bola" width={40} height={40} /></Link>

      <Link href="../feed"><img src="/img/icon-estrela.png" alt="Estrela" width={40} height={40} /></Link>

      <Link href="../home">
        <div className="mt-6">
          <img src="/img/icon-home.png" alt="Home" width={48} height={48} />
        </div>
      </Link>
      <Link href="../perfil">
        <img src="/img/icon-perfil.png" alt="Perfil" width={40} height={40} />
      </Link>
      <Link href="../perfil">
        <img src="/img/icon-config.png" alt="Configurações" width={40} height={40} />
      </Link>
    </nav >
  );
}