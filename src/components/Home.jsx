import React from 'react';

function Home() {
    return (
        <section id="inicio" className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center">
            <div className="container">
                <h1 className="display-1 fw-bold mb-3 animate__animated animate__fadeInUp">Bem-Vindo</h1>
                <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                    Me chamo Jhonaton, e sou um desenvolvedor com base em Python com habilidades em Flask apaixonado por tecnologia.
                </p>
                <a href="#projetos" className="btn btn-primary btn-lg mt-3 animate__animated animate__fadeInUp animate__delay-2s">Ver Meus Projetos</a>
            </div>
        </section>
    );
}

export default Home;