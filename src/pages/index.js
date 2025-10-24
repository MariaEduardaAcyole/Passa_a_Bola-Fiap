"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setError("Preencha email e senha");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // busca usuário na tabela 'usuarios' (sem Supabase Auth)
      const { data: usuario, error: usuarioError } = await supabase
        .from("usuarios")
        .select("*")
        .eq("email", email)
        .eq("senha", senha) // em produção, use hash
        .single();

      if (usuarioError || !usuario) {
        setError("Email ou senha incorretos");
        return;
      }

      // busca atleta vinculado (opcional)
      const { data: atleta, error: atletaError } = await supabase
        .from("atletas")
        .select("*")
        .eq("id_usuario", usuario.id_usuario)
        .single();

      if (atletaError && atletaError.code !== "PGRST116") {
        // PGRST116 = não encontrado, pode ser normal se usuário não for atleta
        console.error("Erro ao buscar atleta:", atletaError);
      }

      // salva usuário logado no localStorage
      const usuarioLogado = {
        id_usuario: usuario.id_usuario,
        email: usuario.email,
        atletaId: atleta?.id_atleta || null, // se não for atleta, será null
      };
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

      router.push("/home");
    } catch (err) {
      console.error("Erro ao conectar ao banco:", err);
      setError("Erro ao conectar ao banco de dados");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    const senhaInput = document.querySelector(".senhaContainerInput");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
  };

  return (
    <div className="login-container">
      <h1 className="titulo">PASSA A BOLA</h1>
      <p className="subtitulo">Faça seu login</p>

      <form className="formulario" onSubmit={handleLogin}>
        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="label">Senha</label>
        <div className="senhaContainer">
          <input
            type="password"
            className="senhaContainerInput"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <span className="toggleOlho" onClick={togglePassword}>
            <img src="/img/olho.gif" alt="Mostrar senha" className="imgOlho" />
          </span>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="btnGoogle">
          <img src="/img/google 1.svg" />
          Entrar com o Google
        </button>
        <br />

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <br />
        <br />

        <p className="cadastroTexto">
          Ainda não tem uma conta?
          <br />
          <a href="#" className="link-roxo">
            Vem jogar com a gente!
          </a>
        </p>
        <br />

        <br />

        <button type="button" className="login-btn" disabled={loading}>
          Cadastre-se
        </button>
      </form>
    </div>
  );
}
