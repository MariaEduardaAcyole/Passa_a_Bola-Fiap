import React, { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function FormCampeonato() {
  const [form, setForm] = useState({
    nome: "",
    status: "Inscrições Abertas",
    modalidade: "",
    datainicio: "",
    datafim: "",
    local: "", // guarda o id do campo como número
    equipesinscritas: "",
    vagasdisponiveis: "",
    descricao: "",
  });

  const [campos, setCampos] = useState([]);

  // Busca todos os campos disponíveis
  useEffect(() => {
    const fetchCampos = async () => {
      const { data, error } = await supabase.from("campos").select("*");
      if (error) console.error("Erro ao buscar campos:", error);
      else setCampos(data);
    };
    fetchCampos();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("campeonatos").insert([form]);
    if (error) console.error("Erro ao cadastrar campeonato:", error);
    else {
      console.log("Campeonato cadastrado:", data);
      alert("Campeonato cadastrado com sucesso!");
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
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-campeonato">
      <h2 className="form-titulo">Cadastrar Campeonato</h2>

      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        className="form-input"
        required
      />

      <input
        type="text"
        name="modalidade"
        placeholder="Modalidade"
        value={form.modalidade}
        onChange={handleChange}
        className="form-input"
      />

      <div className="form-grid">
        <input
          type="date"
          name="datainicio"
          value={form.datainicio}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="date"
          name="datafim"
          value={form.datafim}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      {/* Seleção do campo */}
      <select
        name="local"
        value={form.local}
        onChange={(e) =>
          setForm({ ...form, local: Number(e.target.value) })
        }
        className="form-input"
        required
      >
        <option value="">Selecione o campo</option>
        {campos.map((campo) => (
          <option key={campo.id} value={campo.id}>
            {campo.nome}
          </option>
        ))}
      </select>

      <div className="form-grid">
        <input
          type="number"
          name="equipesinscritas"
          placeholder="Equipes inscritas"
          value={form.equipesinscritas}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="number"
          name="vagasdisponiveis"
          placeholder="Vagas disponíveis"
          value={form.vagasdisponiveis}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <textarea
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        className="form-input"
        rows={4}
      />

      <button type="submit" className="form-botao">
        Cadastrar Campeonato
      </button>
    </form>
     
  );
}
