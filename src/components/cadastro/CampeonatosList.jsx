// CampeonatosList.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import MenuInferior from "../MenuInferior";

export default function CampeonatosList() {
  const [campeonatos, setCampeonatos] = useState([]);

  useEffect(() => {
    fetchCampeonatos();
  }, []);

  const fetchCampeonatos = async () => {
    const { data: campeonatosData, error: campeonatosError } = await supabase
      .from("campeonatos")
      .select("*")
      .order("datainicio", { ascending: true });

    if (campeonatosError) return console.error(campeonatosError);

    const { data: camposData, error: camposError } = await supabase
      .from("campos")
      .select("*");

    if (camposError) return console.error(camposError);

    console.log("Campeonatos:", campeonatosData);
    console.log("Campos:", camposData);

    const campeonatosComCampos = campeonatosData.map((c) => {
      const campoEncontrado = camposData.find((campo) => campo.id_campo === Number(c.local));
      console.log("Campeonato:", c.nome, "Local:", c.local, "Campo encontrado:", campoEncontrado);
      return {
        ...c,
        campo: campoEncontrado || null,
      };
    });

    setCampeonatos(campeonatosComCampos);
  };

  return (
    <div>
      <h2 className="titulo-lista">Campeonatos Cadastrados</h2>
      {campeonatos.length === 0 ? (
        <p>Nenhum campeonato cadastrado.</p>
      ) : (
        <div className="lista-cards">
          {campeonatos.map((c) => (
            <div key={c.id_campo} className="card-campeonato">
              <h3 className="card-titulo">{c.nome}</h3>
              <img
                src={c.campo?.foto_url || ""}
                alt={c.campo?.nome || "Campo"}
                width={200}
              />
              <div className="card-info">
                <p>
                  <Trophy className="icon-roxo" size={20} /> {c.modalidade}
                </p>
                <p>
                  <Calendar className="icon-roxo" size={20} /> {c.datainicio} - {c.datafim}
                </p>
                <p>
                  <MapPin className="icon-roxo" size={20} /> {c.campo?.nome || "Campo não definido"}
                </p>
                <p>
                  <Users className="icon-roxo" size={20} /> {c.equipesinscritas} equipes inscritas
                </p>
                <p>
                  Vagas disponíveis: <strong>{c.vagasdisponiveis}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
