import React, { useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function FormCampeonato() {
  const [form, setForm] = useState({
    nome: "",
    status: "Inscrições Abertas",
    modalidade: "",
    datainicio: "",
    datafim: "",
    local: "",
    equipesinscritas: "",
    vagasdisponiveis: "",
    descricao: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("campeonatos")
      .insert([form]);

    if (error) console.error("Erro ao cadastrar campeonato:", error);
    else {
      console.log("Campeonato cadastrado:", data);
      setForm({
        nome: "",
        status: "Inscrições Abertas",
        modalidade: "",
        datainicio: "",
        datafim: "",
        local: "",
        equipesinscritas: "",
        vagasdisponiveis: "",
        descricao: "",
      });
      alert("Campeonato cadastrado com sucesso!");
    }
  };

  const inputClasses =
    "w-full border rounded-lg px-4 py-2 text-[var(--roxo)] placeholder-[var(--roxo)] focus:outline-none focus:ring-2 focus:ring-[var(--roxo)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-2xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--roxo)" }}>
        Cadastrar Campeonato
      </h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        className={inputClasses}
        required
      />

      <input
        type="text"
        name="modalidade"
        placeholder="Modalidade"
        value={form.modalidade}
        onChange={handleChange}
        className={inputClasses}
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          name="datainicio"
          value={form.datainicio}
          onChange={handleChange}
          className={inputClasses}
        />
        <input
          type="date"
          name="datafim"
          value={form.datafim}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <input
        type="text"
        name="local"
        placeholder="Local"
        value={form.local}
        onChange={handleChange}
        className={inputClasses}
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          name="equipesinscritas"
          placeholder="Equipes inscritas"
          value={form.equipesinscritas}
          onChange={handleChange}
          className={inputClasses}
        />
        <input
          type="number"
          name="vagasdisponiveis"
          placeholder="Vagas disponíveis"
          value={form.vagasdisponiveis}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={handleChange}
          className={inputClasses}
          rows={4}
        />
    
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--roxo)] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold"
      >
        Cadastrar Campeonato
      </button>
    </form>
  );
}
