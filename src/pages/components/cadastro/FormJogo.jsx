import React, { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function FormJogo() {
  const [form, setForm] = useState({
    nome_jogo: "",
    data_jogo: "",
    hora_jogo: "",
    local: "",
    tipo_jogo: "",
    quantidade_jogadoras: "",
    valor: "",
    observacoes: "",
    status: "Agendado",
  });

  const [campos, setCampos] = useState([]);

  // Puxa os campos do banco
  useEffect(() => {
    async function fetchCampos() {
      const { data, error } = await supabase.from("campos").select("*");
      if (error) console.error("Erro ao buscar campos:", error);
      else setCampos(data);
    }
    fetchCampos();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataHora = new Date(`${form.data_jogo}T${form.hora_jogo}`);
    const novoJogo = { ...form, data_jogo: dataHora.toISOString() };
    delete novoJogo.hora_jogo;

    const { data, error } = await supabase.from("jogos").insert([novoJogo]);
    if (error) console.error("Erro ao cadastrar jogo:", error);
    else {
      console.log("Jogo cadastrado:", data);
      setForm({
        nome_jogo: "",
        data_jogo: "",
        hora_jogo: "",
        local: "",
        tipo_jogo: "",
        quantidade_jogadoras: "",
        valor: "",
        observacoes: "",
        status: "Agendado",
      });
      alert("Jogo cadastrado com sucesso!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-jogo">
      <h2 className="form-titulo">Cadastrar Jogo</h2>

      <input
        type="text"
        name="nome_jogo"
        value={form.nome_jogo}
        onChange={handleChange}
        placeholder="Nome do jogo"
        className="form-input"
        required
      />

      <div className="form-grid">
        <input
          type="date"
          name="data_jogo"
          value={form.data_jogo}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="time"
          name="hora_jogo"
          value={form.hora_jogo}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      {/* Select para escolher o local (campo) */}
      <select
        name="local"
        value={form.local}
        onChange={handleChange}
        className="form-input"
        required
      >
        <option value="">Selecione o campo</option>
        {campos.map((campo) => (
        <option key={campo.id_campo} value={campo.id_campo}>{campo.nome}</option>

        ))}
      </select>

      <input
        type="text"
        name="tipo_jogo"
        value={form.tipo_jogo}
        onChange={handleChange}
        placeholder="Tipo de jogo"
        className="form-input"
      />

      <div className="form-grid">
        <input
          type="number"
          name="quantidade_jogadoras"
          value={form.quantidade_jogadoras}
          onChange={handleChange}
          placeholder="Quantidade de jogadoras"
          className="form-input"
        />
        <input
          type="number"
          name="valor"
          value={form.valor}
          onChange={handleChange}
          placeholder="Valor"
          className="form-input"
        />
      </div>

      <textarea
        name="observacoes"
        value={form.observacoes}
        onChange={handleChange}
        placeholder="Observações: traga sua água"
        className="form-input"
        rows={4}
      />

      <button type="submit" className="form-botao">
        Cadastrar Jogo
      </button>
    </form>
  );
}
