import Image from "next/image";

export default function MenuInferior() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow flex justify-around items-center h-20">
      <Image src="/img/icon-bola.png" alt="Bola" width={32} height={32} />
      <Image src="/img/icon-estrela.png" alt="Estrela" width={32} height={32} />
      <div className="-mt-6">
        <Image src="/img/icon-home.png" alt="Home" width={48} height={48} />
      </div>
      <Image src="/img/icon-perfil.png" alt="Perfil" width={32} height={32} />
      <Image src="/img/icon-config.png" alt="Configurações" width={32} height={32} />
    </nav>
  );
}