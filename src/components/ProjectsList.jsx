import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsList({ projects }) {
  const mostrar = 4;
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const hayMas = projects.length > mostrar;
  const proyectosMostrados = mostrarTodos ? projects : projects.slice(0, mostrar);

  return (
    <>
      <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-20 sm:px-40">
        {proyectosMostrados.map((proj, idx) => (
          <ProjectCard
            key={proj.nombre + idx}
            nombre={proj.nombre}
            link_sitio={proj.link_sitio}
            link_repositorio={proj.link_repositorio}
            tecnologias={proj.tecnologias}
            imagen={proj.imagen}
            alt={proj.alt}
            descripcion={proj.descripcion}
          />
        ))}
      </div>
      {hayMas && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="text-gray-900 font-semibold hover:underline transition-colors cursor-pointer"
            onClick={() => setMostrarTodos((v) => !v)}
          >
            {mostrarTodos ? "Ocultar proyectos" : "Ver todos los proyectos"}
          </button>
        </div>
      )}
    </>
  );
}
