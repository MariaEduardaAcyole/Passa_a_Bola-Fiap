import React, { useState } from "react";
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combina data e hora em ISO antes de enviar
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--roxo)" }}>
        Cadastrar Jogo
      </h2>

      <input
        type="text"
        name="nome_jogo"
        value={form.nome_jogo}
        onChange={handleChange}
        placeholder="Nome do jogo"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        style={{ color: "var(--roxo)", placeholderColor: "var(--roxo)" }}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="data_jogo"
          value={form.data_jogo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          style={{ color: "var(--roxo)" }}
          required
        />
        <input
          type="time"
          name="hora_jogo"
          value={form.hora_jogo}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          style={{ color: "var(--roxo)" }}
          required
        />
      </div>

      <input
        type="text"
        name="local"
        value={form.local}
        onChange={handleChange}
        placeholder="Local"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        style={{ color: "var(--roxo)" }}
      />

      <input
        type="text"
        name="tipo_jogo"
        value={form.tipo_jogo}
        onChange={handleChange}
        placeholder="Tipo de jogo"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        style={{ color: "var(--roxo)" }}
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          name="quantidade_jogadoras"
          value={form.quantidade_jogadoras}
          onChange={handleChange}
          placeholder="Quantidade de jogadoras"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          style={{ color: "var(--roxo)" }}
        />
        <input
          type="number"
          name="valor"
          value={form.valor}
          onChange={handleChange}
          placeholder="Valor"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          style={{ color: "var(--roxo)" }}
        />
      </div>

      <textarea
        name="observacoes"
        value={form.observacoes}
        onChange={handleChange}
        placeholder="Observações: traga sua água"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        rows={4}
        style={{ color: "var(--roxo)" }}
      />

      <button
        type="submit"
        className="w-full text-white px-4 py-2 rounded-lg transition-colors font-semibold"
        style={{ backgroundColor: "var(--roxo)" }}
      >
        Cadastrar Jogo
      </button>
    </form>
  );
}
