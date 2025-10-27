"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import MenuInferior from "../components/MenuInferior";
import Header from "../components/Header";

export default function Perfil() {
  const router = useRouter();

  const [usuario, setUsuario] = useState(null);
  const [atleta, setAtleta] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [jogosConfirmados, setJogosConfirmados] = useState([]);
  const [jogosListaEspera, setJogosListaEspera] = useState([]);

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuarioLogado) {
      setError("Nenhum usuário logado.");
      setLoading(false);
      return;
    }
    carregarDados(usuarioLogado);
  }, []);

  const carregarDados = async (usuarioLogado) => {
    try {
      const { data: userData, error: userError } = await supabase
        .from("usuarios")
        .select("id_usuario, nome, email")
        .eq("id_usuario", usuarioLogado.id_usuario)
        .single();

      if (userError) throw userError;
      setUsuario(userData);

      const { data: atletaData, error: atletaError } = await supabase
        .from("atletas")
        .select("id_atleta, apelido, data_nascimento, cidade, posicao, perna_dominante")
        .eq("id_atleta", usuarioLogado.atletaId)
        .single();

      if (atletaError) throw atletaError;
      setAtleta(atletaData);

      await carregarJogos(usuarioLogado.atletaId);
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      setError("Não foi possível carregar seus dados.");
    } finally {
      setLoading(false);
    }
  };

  const carregarJogos = async (atletaId) => {
    try {
      const { data, error } = await supabase
        .from("inscricoes")
        .select(`id_jogo, status, jogos(*, campos:local(nome, foto_url))`)
        .eq("id_atleta", atletaId);

      if (error) throw error;

      const confirmados = data.filter((i) => i.status === "confirmada");
      const espera = data.filter((i) => i.status === "espera");

      setJogosConfirmados(confirmados);
      setJogosListaEspera(espera);
    } catch (err) {
      console.error("Erro ao buscar jogos:", err);
    }
  };

  // 🚨 Função de cancelamento
  const cancelarInscricao = async (idJogo) => {
    try {
      const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
      const { error } = await supabase
        .from("inscricoes")
        .delete()
        .eq("id_atleta", usuarioLogado.atletaId)
        .eq("id_jogo", idJogo);

      if (error) throw error;

      alert("Inscrição cancelada com sucesso!");
      await carregarJogos(usuarioLogado.atletaId);
    } catch (err) {
      console.error("Erro ao cancelar inscrição:", err);
      alert("Não foi possível cancelar a inscrição.");
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (err) {
      console.error(err);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  if (loading) return <p>Carregando perfil...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="perfil-corpo">
      <Header />

      <div className="perfil-nome-user">
        <h2 className="perfil-titulo-nome">
          Olá, {usuario?.nome || "[Nome da Jogadora]"}! ⚽
        </h2>
        <hr className="perfil-linha-embaixo-nome" />
      </div>

      <div className="perfil-caixa-colunas">
        {/* FORMULÁRIO */}
        <section className="perfil-form">
          <input type="text" value={usuario?.nome} readOnly />
          <input type="email" value={usuario?.email} readOnly />
          <input type="text" value={atleta?.apelido} readOnly />
          <input type="date" value={atleta?.data_nascimento} readOnly />
          <input type="text" value={atleta?.cidade} readOnly />
          <input type="text" value={atleta?.posicao} readOnly />
          <input type="text" value={atleta?.perna_dominante} readOnly />
        </section>

        {/* NOTIFICAÇÕES */}
        <section className="perfil-notificacoes">
          <h2 className="perfil-titulo-secoes">🔔 Notificações</h2>
          <div className="notificacao"> <strong>Novo jogo disponível</strong> <p className="perfil-conteudo-notificacao">Você pode se inscrever no jogo de sábado às 15h.</p> <span className="notificacao-data">02/10/2025</span> <div className="notificacao-acoes"> <button className="btn-acao">Ver jogo</button> <button className="btn-cancelar">✕</button> </div> </div> <div className="notificacao"> <strong>Confirmação de inscrição</strong> <p>Sua inscrição no campeonato de futsal foi confirmada ✅</p> <span className="notificacao-data">01/10/2025</span> <div className="notificacao-acoes"> <a href="/meus-jogos" className="link-feed">Ver detalhes</a> </div> </div> <div className="notificacao"> <strong>Lista de espera</strong> <p>Você entrou na lista de espera do jogo de domingo.</p> <span className="notificacao-data">30/09/2025</span> <div className="notificacao-acoes"> <button className="btn-acao">Ver jogo</button> </div> </div> </section> </div>




      {/* SEÇÕES: JOGOS */}
      <section className="caixa-perfil-jogos">
        {/* Jogos Confirmados */}
        <div className="perfil-jogos">
          <h2 className="titulo perfil-titulo-secoes">
            <img src="/img/icon-ingressos.png" /> Jogos Confirmados
          </h2>
          {jogosConfirmados.length === 0 ? (
            <p>Você ainda não está inscrita em nenhum jogo.</p>
          ) : (
            jogosConfirmados.map((i) => (
              <div key={`confirmado-${i.id_jogo}`} className="perfil-jogo-card">
                <div className="jogo-card-header">
                  <h3>
                    {new Date(i.jogos.data_jogo)
                      .toLocaleDateString("pt-BR", { weekday: "long" })
                      .toUpperCase()}
                  </h3>
                  <span className="badge badge-confirmada">Confirmado</span>
                </div>
                <div className="jogo-card-body">
                  <p>
                    <img className="jogo-icon" src="/img/icon-calendario.png" />{" "}
                    {new Date(i.jogos.data_jogo).toLocaleDateString("pt-BR")}
                  </p>
                  <p>
                    <img className="jogo-icon" src="/img/icon-relogio.png" />{" "}
                    {new Date(i.jogos.data_jogo).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p>
                    <img className="jogo-icon" src="/img/pin-de-localizacao.svg" />
                    {i.jogos.campos?.nome}
                  </p>
                </div>
                {/* Botão de cancelamento */}
                <button
                  className="btn-cancelar-inscricao"
                  onClick={() => cancelarInscricao(i.id_jogo)}
                >
                  Cancelar inscrição
                </button>
              </div>
            ))
          )}
        </div>

        {/* Lista de Espera */}
        <div className="perfil-jogos espera">
          <h2 className="titulo perfil-titulo-secoes">
            <img src="/img/icon-banco.png" /> Lista de Espera
          </h2>
          {jogosListaEspera.length === 0 ? (
            <p>Você não está na lista de espera de nenhum jogo.</p>
          ) : (
            jogosListaEspera.map((i) => (
              <div key={`espera-${i.id_jogo}`} className="perfil-jogo-card">
                <div className="jogo-card-header">
                  <h3>
                    {new Date(i.jogos.data_jogo)
                      .toLocaleDateString("pt-BR", { weekday: "long" })
                      .toUpperCase()}
                  </h3>
                  <span className="badge badge-lista-espera">Lista de Espera</span>
                </div>
                <div className="jogo-card-body">
                  <p>
                    <img className="jogo-icon" src="/img/icon-calendario.png" />{" "}
                    {new Date(i.jogos.data_jogo).toLocaleDateString("pt-BR")}
                  </p>
                  <p>
                    <img className="jogo-icon" src="/img/icon-relogio.png" />{" "}
                    {new Date(i.jogos.data_jogo).toLocaleTimeString("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p>
                    <img className="jogo-icon" src="/img/pin-de-localizacao.svg" />
                    {i.jogos.campos?.nome}
                  </p>
                </div>
                {/* Botão de cancelamento */}
                <button
                  className="btn-cancelar-inscricao"
                  onClick={() => cancelarInscricao(i.id_jogo)}
                >
                  Cancelar inscrição
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      <MenuInferior />
    </div>
  );
}
