import Image from "next/image";

export default function Feed({ novosPosts }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-purple-700">
        ACESSE O FEED
        <Image src="/img/estrela.gif" width={24} height={24} alt="Estrela animada" />
      </h2>
      <div className="bg-purple-700 w-4/5 h-16 rounded-lg flex items-center justify-center text-white text-xl font-semibold">
        {novosPosts} Novos Posts
      </div>
    </div>
  );
}
