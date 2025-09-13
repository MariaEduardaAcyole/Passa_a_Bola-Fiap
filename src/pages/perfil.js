import MenuInferior from "../pages/components/MenuInferior";
import Header from "../pages/components/Header";

export default function HomePage() {
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

      <form className="perfil-form">
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Apelido no jogo" />
        <input type="text" placeholder="CPF" />
        <input type="text" placeholder="Apelido" />
        <input type="date" placeholder="Data de Nascimento" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="Posição em Campo" />
        <input type="text" placeholder="Perna Dominante" />
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
