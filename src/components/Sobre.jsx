import React from 'react';

function Sobre() {
    return (
        <section id="sobre" className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4">
                    <img src="/img/meu-perfil.png" className="img-fluid rounded-circle shadow-sm" alt="Foto de Perfil" />
                </div>

                <div className="col-md-8">
                    <h1 className="display-4 mb-3">Olá, me chamo Jhonaton Salgueiro</h1>
                    <p className="lead">
                        Sou um desenvolvedor Front-End com um forte interesse em me tornar Full-Stack. Minha curiosidade e paixão me impulsionam a criar experiências digitais marcantes.
                    </p>
                    <p>
                        Acredito que, do conceito criativo à interface final, cada linha de código conecta a um futuro de inovação. Gosto de unir tecnologia, ideias e negócios para gerar soluções de valor real.
                    </p>
                    <p>
                        Atualmente, estou em busca da minha primeira oportunidade na área de tecnologia, com o objetivo de contribuir para projetos com impacto e significado positivo.
                    </p>
                    
                    <hr className="my-4" />

                    <div className="d-flex flex-wrap gap-2">
                        <h5>Habilidades Técnicas:</h5>
                        <span className="badge bg-secondary p-2 me-1">C</span>
                        <span className="badge bg-secondary p-2 me-1">Python</span>
                        <span className="badge bg-secondary p-2 me-1">Flask</span>
                        <span className="badge bg-secondary p-2 me-1">HTML</span>
                        <span className="badge bg-secondary p-2 me-1">CSS</span>
                        <span className="badge bg-secondary p-2 me-1">Estrutura de Dados</span>
                        <span className="badge bg-secondary p-2 me-1">Git / GitHub</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;