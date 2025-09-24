//feed.js
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Header from "../pages/components/Header";
import MenuInferior from "../pages/components/MenuInferior";

export default function Feed() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [user, setUser] = useState(null);

  // Buscar usuário logado
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  // Buscar posts do Supabase
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });

    if (error) console.error("Erro ao carregar posts:", error);
    else {
      const postsWithLikes = data.map(post => ({ ...post, curtidas: 0, curtiu: false }));
      setPosts(postsWithLikes);
    }
  }

  // Criar novo post
  async function handlePost() {
    if (!newPost.trim()) return;

    const { error } = await supabase.from("posts").insert([
      {
        usuario: user?.email || "Anônimo",
        avatar: "/img/avatar-saopaulo.png",
        texto: newPost,
        imagem: null,
      },
    ]);

    if (error) console.error("Erro ao postar:", error);
    else {
      setNewPost("");
      setShowForm(false);
      fetchPosts();
    }
  }

  // Curtir/Descurtir
  const handleCurtir = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id
          ? { ...post, curtiu: !post.curtiu, curtidas: post.curtiu ? post.curtidas - 1 : post.curtidas + 1 }
          : post
      )
    );
  };

  return (
    <>
      {/* ===== Topbar fixa no topo ===== */}
      <Header />

      {/* ===== Conteúdo: compensa a altura da topbar e do menu inferior ===== */}
      <main className="page-main">
        <section className="feed-container">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <img src={post.avatar} alt="avatar" className="avatar" />
                <span className="username">{post.usuario}</span>
              </div>
              <p className="post-text">{post.texto}</p>
              {post.imagem && <img src={post.imagem} alt="post" className="post-img" />}
              <div className="post-actions">
                <button className="btn-action" onClick={() => handleCurtir(post.id)}>
                  <img
                    src={post.curtiu ? "/img/icon-coracao.png" : "/img/icon-coracao.png"}
                    className="icon-coracao"
                    alt="Curtir"
                  />
                </button>
                <span>{post.curtidas} curtidas</span>
              </div>
            </div>
          ))}

          <button className="fab" onClick={() => setShowForm(true)}>
            <img src="/img/icon-lapis.png" className="icone" alt="Novo post" />
          </button>
        </section>

        {showForm && (
          <div className="modal-overlay" onClick={() => setShowForm(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Novo Post</h2>
              <textarea
                placeholder="Escreva algo..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <div className="modal-actions">
                <button className="btn-cancel" onClick={() => setShowForm(false)}>
                  Cancelar
                </button>
                <button className="btn-post" onClick={handlePost}>
                  Publicar
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="feed-rodape"></footer>
      </main>

      {/* Se o MenuInferior for fixo, o CSS abaixo já reserva espaço */}
      <MenuInferior />
    </>
  );
}