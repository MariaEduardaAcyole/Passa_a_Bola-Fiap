export default function Header() {
    return (
        <header className="mb-6">
            <nav className="flex justify-between items-center mb-4">
                <img width={36} height={36} src="/img/logopassabola - semtexto.png" />
                <h1 className="text-xl font-bold">HOME</h1>
                <img src="/img/sininho.png" alt="Notificações" width={24} height={24} />
            </nav>

            <h2 className="text-2xl font-semibold mb-4">
                Já entrou no time,<br />
                agora entre em campo! 🏟️⚽
            </h2>

            <hr className="border-gray-300 mb-4" />
            <img src="/img/capa.svg" alt="Capa do site" width={500} height={200} className="w-full rounded-lg mb-4" />
            <hr className="border-gray-300" />

        </header>
    )
}

