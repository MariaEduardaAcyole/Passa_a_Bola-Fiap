//login.js
"use client";

import { useState } from "react";



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Usuário logado:", data.user);
      // redirecionar para feed
      window.location.href = "/feed";
    }
  };
  function togglePassword() {
    const senhaInput = document.getElementsByClassName("toggle-olho");
    const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
    senhaInput.setAttribute("type", tipo);
  }

  return (
    <div className="container">
      <h1 className="titulo">PASSA A BOLA</h1>
      <p className="subtitulo">Faça seu login</p>
      <form className="formulario">
        <label className="label">Email</label>
        <input type="email" />

        <label className="label">Senha</label>
        <div className="senhaContainer">
          <input type="password" className="senhaContainerInput" />
          <span className="toggleOlho">
            <img src="/img/olho.gif" alt="Mostrar senha" className="imgOlho" />
          </span>
        </div>
<br/>
        <button className="btn">Entrar</button>
   <br/>
<br/>

        <a href="" class="esqueceu-senha">Esqueceu a senha</a>
<br/>
<br/>

        <hr />
        <br/>

        <button className="btnGoogle">
          <img src="/img/google 1.svg" />
          Entrar com o Google
        </button>
        <br/>

        <p className="cadastroTexto">Ainda não tem uma conta?<br />
          <a href="#" class="link-roxo">Vem jogar com a gente!</a>
        </p>
        <br/>

        <button className="btn">CADASTRE-SE</button>
      </form >
    </div >
  );
}
