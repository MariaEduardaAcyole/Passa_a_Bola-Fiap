//perfil.js
import MenuInferior from "../pages/components/MenuInferior";
import Header from "../pages/components/Header";

export default function HomePage() {
  const router = useRouter();

  // Estados dos inputs
  const [nome, setNome] = useState("Gabriela");
  const [email, setEmail] = useState("gabigol@gmail.com");
  const [apelidoJogo, setApelidoJogo] = useState("Gabi10");
 
  const [dataNascimento, setDataNascimento] = useState("05/08/2006");
  const [cidade, setCidade] = useState("São paulo");
  const [posicao, setPosicao] = useState("Meia");
  const [pernaDominante, setPernaDominante] = useState("Esquerda");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Função para salvar dados
  const handleSalvar = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      console.log({
        nome,
        email,
        apelidoJogo,
        dataNascimento,
        cidade,
        posicao,
        pernaDominante,
      });

      alert("Dados salvos com sucesso!");
    } catch (err) {
      console.error(err);
      setError("Não foi possível salvar os dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Função para logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (err) {
      console.error(err);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <div className="perfil-corpo">
      {/* Header */}
      <Header />

      {/* Botão de sair */}
      <div className="perfil-linha-icone-sair">
        <img
          src="/img/icon-sair.png"
          className="perfil-icon perfil-icon-sair"
          alt="Sair"
        />
      </div>

      {/* Saudação */}
      <div className="perfil-nome-user">
        <h2 className="perfil-titulo-nome">Olá, [Nome da Jogadora]! ⚽</h2>
        <hr className="perfil-linha-embaixo-nome" />
      </div>

      {/* Informações pessoais */}
      <div className="perfil-informacao">
        <img
          src="/img/icon-carteirinha.png"
          className="perfil-icon"
          alt="Info"
        />
        <h2 className="perfil-titulo-2">Informações Pessoais</h2>
      </div>

      <form className="perfil-form" onSubmit={handleSalvar}>
        <input type="text" placeholder="Nome completo" value={nome} onChange={e => setNome(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Apelido no jogo" value={apelidoJogo} onChange={e => setApelidoJogo(e.target.value)} />

        <input type="date" placeholder="Data de Nascimento" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
        <input type="text" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
        <input type="text" placeholder="Posição em Campo" value={posicao} onChange={e => setPosicao(e.target.value)} />
        <input type="text" placeholder="Perna Dominante" value={pernaDominante} onChange={e => setPernaDominante(e.target.value)} />

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </form>

      {/* Seus Jogos */}
      <div className="perfil-jogos">
        <div className="linha-titulos">
          <img src="/img/icon-ingressos.png" className="perfil-icon"></img>
          <h2 className="perfil-titulo-2">Seus jogos</h2>
        </div>
        <div className="perfil-jogo-card ativo">
          <h3 className="perfil-dia-semana">DOMINGO</h3>{" "}
          <button className="btn-cancelar icon-perfil">X</button>
          <p className="perfil-dia">
            <img src="/img/icon-calendario.png" className="perfil-icon"></img>
            19/06{" "}
          </p>
          <p className="perfil-hora">
            <img src="/img/icon-relogio.png" className="perfil-icon"></img>
            19h
          </p>
          <p className="perfil-localizacao"> Av. das nações futebolísticas</p>
        </div>
      </div>

      {/* Lista de Espera */}
      <div className="perfil-lista-espera">
        <div className="linha-titulos">
          <img src="/img/icon-banco.png" className="perfil-icon"></img>
          <h2 className="perfil-titulo-2">Lista de Espera</h2>
        </div>
        <div className="perfil-jogo-card aguardando">
          <p>QUINTA - 28/06 - 19h</p>
          <span className="badge-aguardando">Aguardando</span>
        </div>
      </div>

      {/* Últimos Jogos */}
      <div className="perfil-ultimos-jogos">
         <div className="linha-titulos">
          <img src="/img/icon-bola.png" className="perfil-icon"></img>
          <h2 className="perfil-titulo-2">Seus Jogos</h2>
        </div>
        <div className="perfil-jogo-card">
          <p>QUINTA - 28/06 - 19h</p>
          <p>"FUT PARA ELAS"</p>
          <p>📍 Av. das nações futebolísticas</p>
          <a href="#" className="link-feed">
            Ver no feed
          </a>
        </div>
      </div>

      {/* Notificações */}
      <div className="perfil-notificacoes">
  <div className="linha-titulos">
          <img src="/img/icon-apito.png" className="perfil-icon"></img>
          <h2 className="perfil-titulo-2">Notificações</h2>
        </div>        <div className="notificacao">
          <p>
            <strong>Novo jogo anunciado!</strong> Você tem 1 nova vaga liberada!
            Acesse sua lista de espera.
          </p>
          <button className="btn-acao">Bora jogar?</button>
        </div>
        <div className="notificacao">
          <p>
            <strong>Novo jogo anunciado!</strong> Novo jogo aberto para
            inscrições neste domingo!
          </p>
          <button className="btn-acao">Bora jogar?</button>
        </div>
      </div>

      {/* Menu Inferior */}
      <MenuInferior />
        
    </div>
  );
}
