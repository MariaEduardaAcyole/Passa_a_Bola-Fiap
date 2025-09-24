//login.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setError("Preencha email e senha");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: senha,
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        console.log("Usuário logado:", data.user);
        router.push("/home"); // redireciona
      }
    } catch (err) {
      setError("Erro ao conectar com Supabase");
      console.error(err);
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

        <p className="cadastroTexto">Ainda não tem uma conta?<br />
          <a href="#" className="link-roxo">Vem jogar com a gente!</a>
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
