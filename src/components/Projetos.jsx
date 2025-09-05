import React from "react";
import meusProjetos from "../data/projetosData";

function Projetos() {
  return (
    <section>
      <h1>Meus Projetos</h1>
      <div className="grid">
        {meusProjetos.map((projeto, index) => (
          <div key={index} className="card">
            <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.titulo}`} />
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            <span>{projeto.linguagem}</span>
            <a href={projeto.link_projeto} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
