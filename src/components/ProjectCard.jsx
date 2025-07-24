import React from "react";

export default function ProjectCard({ nombre, link_sitio, link_repositorio, tecnologias, imagen, alt, descripcion }) {
  return (
    <article className="flex flex-col sm:flex-row gap-10">
        <div className="sm:w-96">
            <img className="w-full h-auto object-contain rounded-lg" src={imagen} alt={alt} />
        </div>

        <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-2xl">{nombre}</h3>
            <p className="text-gray-600 sm:w-96">{descripcion}</p>
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(tecnologias) ? tecnologias : []).map((tech, idx) => (
                <span
                key={tech + idx} // Usá solo `tech` si sabés que no se repite
                className="bg-gray-200 text-xs px-2 py-1 rounded"
                >
                {tech}
                </span>
            ))}
            </div>
            <div className="flex gap-3">

            <a target="_blank" className="text-xl font-semibold relative inline-block hover:text-gray-700" href={link_sitio}>
                <span className="border-b-2 border-black pb-0.5">ver</span> proyecto
            </a>
            <a target="_blank" className="text-xl font-semibold relative inline-block hover:text-gray-700" href={link_repositorio}>
                <span className="border-b-2 border-black pb-0.5">repo</span>
            </a>
            </div>
        </div>
    </article>
  );
}
