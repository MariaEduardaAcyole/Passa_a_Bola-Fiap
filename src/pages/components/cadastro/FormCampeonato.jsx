//FormCampeonato
import React, { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supabaseClient";

export default function FormCampeonato() {
  const [form, setForm] = useState({
    nome: "",
    status: "Inscrições Abertas",
    modalidade: "",
    datainicio: "",
    datafim: "",
    local: "",
    equipesinscritas: 0,
    vagasdisponiveis: "",
    descricao: "",
  });

  const [campos, setCampos] = useState([]);

  useEffect(() => {
    const fetchCampos = async () => {
      const { data, error } = await supabase.from("campos").select("*");
      console.log("Campos recebidos do Supabase:", data, error);
      if (error) console.error("Erro ao buscar campos:", error);
      else setCampos(data);
    };
    fetchCampos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`handleChange -> campo: ${name}, valor: ${value}`);

    if (name === "equipesinscritas" || name === "vagasdisponiveis") {
      setForm({ ...form, [name]: value === "" ? "" : Number(value) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit -> form atual:", form);

    if (!form.nome || !form.vagasdisponiveis || form.local === "") {
      alert("Preencha todos os campos obrigatórios!");
      console.log("Form inválido: algum campo obrigatório está vazio.");
      return;
    }

    const localNumber = Number(form.local);
    console.log("handleSubmit -> valor de local convertido para number:", localNumber);

    const campoValido = campos.find((c) => c.id_campo === localNumber);
    console.log("handleSubmit -> verifica se local existe na lista de campos:", campoValido);

    if (isNaN(localNumber) || !campoValido) {
      alert("Selecione um campo válido!");
      console.warn("Campo local inválido ou não encontrado na lista de campos.");
      return;
    }

    const insertData = {
      ...form,
      local: localNumber,
      equipesinscritas: Number(form.equipesinscritas) || 0,
      vagasdisponiveis: Number(form.vagasdisponiveis) || 0,
    };

    console.log("handleSubmit -> dados que serão enviados para o Supabase:", insertData);

    const { data, error } = await supabase.from("campeonatos").insert([insertData]);
    if (error) {
      console.error("Erro ao cadastrar campeonato:", error);
      alert(`Erro ao cadastrar: ${error.message}`);
    } else {
      console.log("Campeonato cadastrado com sucesso:", data);
      alert("Campeonato cadastrado com sucesso!");
      setForm({
        nome: "",
        status: "Inscrições Abertas",
        modalidade: "",
        datainicio: "",
        datafim: "",
        local: "",
        equipesinscritas: 0,
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

      <select
        name="local"
        value={form.local}
        onChange={(e) => {
          console.log("select change -> valor selecionado:", e.target.value);
          setForm({ ...form, local: e.target.value });
        }}
        className="form-input"
        required
      >
        <option value="">Selecione o campo</option>
        {campos.map((campo) => (
          <option key={campo.id_campo} value={String(campo.id_campo)}>
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
          value={form.vagasdisponiveis || ""}
          onChange={handleChange}
          className="form-input"
          required
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
