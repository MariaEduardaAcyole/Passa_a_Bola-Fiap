import Image from "next/image";

export default function CardJogo({ dia, mesAno, diaSemana, local, img }) {
  return (
    <div className="min-w-[200px] bg-white rounded-xl shadow-md p-4 flex-shrink-0 snap-center">
      <Image src={img} alt="Campo" width={200} height={128} className="w-full h-32 object-cover rounded-lg" />
      <div className="mt-2 text-center">
        <p className="text-2xl font-bold text-purple-700">{dia}</p>
        <p className="text-sm font-semibold text-gray-500">{mesAno}</p>
        <p className="text-sm text-gray-500">{diaSemana}</p>
        <div className="flex items-center justify-center mt-1 gap-1">
          <Image src="/img/pin-de-localizacao.svg" width={16} height={16} alt="Localização" />
          <span className="text-sm">{local}</span>
        </div>
      </div>
    </div>
  );
}
