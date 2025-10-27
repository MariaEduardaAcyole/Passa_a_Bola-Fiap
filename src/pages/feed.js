import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import Header from "../components/Header";
import MenuInferior from "../components/MenuInferior";

export default function Feed() {
  const [showForm, setShowForm] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [user, setUser] = useState(null);
  const [jogadoras, setJogadoras] = useState([
    { id: 1, apelido: "Duda" },
    { id: 2, apelido: "Gabi" },
    { id: 3, apelido: "Tamires" },
  ]);
  const [marcadas, setMarcadas] = useState([]);

  // Buscar usuário logado
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  // Buscar posts
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
      const postsWithLikes = data.map(post => ({ ...post, curtidas: 0, curtiu: false, republicado: false }));
      setPosts(postsWithLikes);
    }
  }

  // Criar post
  async function handlePost() {
    if (!newPost.trim() && !newImage) return;

    const { error } = await supabase.from("posts").insert([
      {
        usuario: user?.nome || "Anônimo",
        avatar: "/img/avatar-saopaulo.png",
        texto: newPost,
        imagem: newImage ? URL.createObjectURL(newImage) : null,
        tags: marcadas.map(m => m.apelido).join(", "),
      },
    ]);

    if (error) console.error("Erro ao postar:", error);
    else {
      setNewPost("");
      setNewImage(null);
      setMarcadas([]);
      setShowForm(false);
      fetchPosts();
    }
  }

  // Curtir
  const handleCurtir = (id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, curtiu: !post.curtiu, curtidas: post.curtiu ? post.curtidas - 1 : post.curtidas + 1 }
          : post
      )
    );
  };

  // Republicar (simulado)
  const handleRepublicar = (id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, republicado: true }
          : post
      )
    );
    alert("Você republicou esse post ✅");
  };

  // Marcar jogadoras
  const toggleMarcarJogadora = (jogadora) => {
    setMarcadas(prev =>
      prev.includes(jogadora)
        ? prev.filter(j => j !== jogadora)
        : [...prev, jogadora]
    );
  };

  return (
    <>
      <Header />
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
              {post.tags && <p className="tags">Jogadoras: {post.tags}</p>}

              <div className="post-actions">
                <button className={`btn-action ${post.curtiu ? "liked" : ""}`} onClick={() => handleCurtir(post.id)}>
                  <img src="/img/icon-coracao.png" className="icon-coracao" alt="Curtir" />
                </button>
                <span>{post.curtidas} curtidas</span>

                <button className="btn-action" onClick={() => handleRepublicar(post.id)}>
                  <img src="/img/icon-republicar.png" className="icon-coracao" />                </button>
                <span>{post.curtidas} republicados</span>

              </div>
            </div>
          ))}

          {/* BOTÃO ADD POST */}
          <button className="fab" onClick={() => setShowForm(true)}>
            <img src="/img/icon-lapis.png" className="icone" alt="Novo post" />
          </button>
        </section>

        {/* MODAL DE NOVO POST */}
        {showForm && (
          <div className="modal-overlay" onClick={() => setShowForm(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Novo Post</h2>
              <textarea
                placeholder="Escreva algo..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <input type="file" accept="image/*" onChange={(e) => setNewImage(e.target.files[0])} />

              {/* Botão marcar jogadoras */}
              <button className="btn-acao" onClick={() => setShowTags(true)}>
                Marcar jogadoras
              </button>
              {marcadas.length > 0 && (
                <p className="tags-preview">
                  Marcadas: {marcadas.map(m => m.apelido).join(", ")}
                </p>
              )}

              <div className="modal-actions">
                <button className="btn-cancel" onClick={() => setShowForm(false)}>Cancelar</button>
                <button className="btn-post" onClick={handlePost}>Publicar</button>
              </div>
            </div>
          </div>
        )}

        {/* POPUP MARCAR JOGADORAS */}
        {showTags && (
          <div className="modal-overlay" onClick={() => setShowTags(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Marcar Jogadoras</h3>
              {jogadoras.map(j => (
                <div key={j.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={marcadas.includes(j)}
                      onChange={() => toggleMarcarJogadora(j)}
                    />
                    {j.apelido}
                  </label>
                </div>
              ))}
              <div className="modal-actions">
                <button className="btn-post" onClick={() => setShowTags(false)}>Concluir</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <MenuInferior />
    </>
  );
}
