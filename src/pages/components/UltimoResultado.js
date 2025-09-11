import Image from "next/image";

export default function UltimoResultado({ dia, mesAno, diaSemana, local }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center">
      <p className="text-2xl font-bold">{dia}</p>
      <p className="text-sm text-gray-500">{mesAno}</p>
      <p className="text-sm text-gray-500">{diaSemana}</p>
      <div className="flex items-center justify-center mt-1 gap-1">
        <Image src="/img/pin-de-localizacao.svg" width={16} height={16} alt="Localização" />
        <span className="text-sm">{local}</span>
      </div>
    </div>
  );
}
