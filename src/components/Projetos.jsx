import React from 'react';
import meusProjetos from '../data/projetosData';

function Projetos() {
    return (
        <section id="projetos" className="container my-5">
            <h1 className="mb-4">Meus Projetos</h1>
            
            <div className="row">
                {meusProjetos.map((projeto, index) => (
                    <div key={index} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            {/* O caminho da imagem agora é referenciado a partir da pasta 'public' */}
                            <img src={`/img/${projeto.imagem}`} className="card-img-top" alt={`Imagem do Projeto ${projeto.titulo}`} />
                            
                            <div className="card-body">
                                <h5 className="card-title">{projeto.titulo}</h5>
                                <p className="card-text">{projeto.descricao}</p>
                                <span className="badge bg-primary">{projeto.linguagem}</span>
                            </div>

                            <div className="card-footer text-center">
                                <a href={projeto.link_projeto} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                                    Ver no GitHub <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projetos;