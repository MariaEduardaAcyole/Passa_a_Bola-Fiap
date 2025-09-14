import { useState } from "react";
import Header from "../pages/components/Header";
import MenuInferior from "../pages/components/MenuInferior";

export default function Feed() {
  const [showForm, setShowForm] = useState(false);

  // Agora os posts ficam no estado para poder atualizar curtidas
  const [posts, setPosts] = useState([
    {
      id: 1,
      usuario: "Maria",
      avatar: "/img/avatar-corinthians.png",
      texto: "Acabei de treinar com o time! 💪⚽",
      imagem: "/img/post-corinthians.png",
      curtidas: 0,
      curtiu: false,
    },
    {
      id: 2,
      usuario: "Eduarda",
      avatar: "/img/avatar-saopaulo.png",
      texto: "Ansiosa para o campeonato do fim de semana 😍🔥",
      imagem: "/img/post-saopaulo.png",
      curtidas: 3,
      curtiu: false,
    },
    {
      id: 3,
      usuario: "Eduarda",
      avatar: "/img/avatar-saopaulo.png",
      texto: "Ansiosa para o campeonato do fim de semana 😍🔥",
      imagem: "/img/post-saopaulo.png",
      curtidas: 1,
      curtiu: false,
    },
  ]);

  // Função para curtir/descurtir
  const handleCurtir = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              curtiu: !post.curtiu,
              curtidas: post.curtiu ? post.curtidas - 1 : post.curtidas + 1,
            }
          : post
      )
    );
  };

  return (
    <div className="feed-container">
      <Header />

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <img src={post.avatar} alt="avatar" className="avatar" />
            <span className="username">{post.usuario}</span>
          </div>
          <p className="post-text">{post.texto}</p>
          {post.imagem && (
            <img src={post.imagem} alt="post" className="post-img" />
          )}
          <div className="post-actions">
            <button className="btn-action" onClick={() => handleCurtir(post.id)}>
              <img
                src={
                  post.curtiu
                    ? "/img/icon-coracao.png"
                    : "/img/icon-coracao.png"
                }
                className="icon-coracao"
                alt="Curtir"
              />
            </button>
            <span>{post.curtidas} curtidas</span>
          </div>
        </div>
      ))}

      {/* Botão flutuante */}
      <button className="fab" onClick={() => setShowForm(true)}>
        <img src="/img/icon-lapis.png" className="icone" alt="Novo post" />
      </button>

      {/* Formulário modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Novo Post</h2>
            <textarea placeholder="Escreva algo..." />
            <input type="file" />
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowForm(false)}>
                Cancelar
              </button>
              <button className="btn-post">Publicar</button>
            </div>
          </div>
        </div>
      )}

      <footer className="feed-rodape"></footer>

      {/* Menu Inferior */}
      <MenuInferior />
    </div>
  );
}
