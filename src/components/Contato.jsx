import React from 'react';

function Contato() {
    return (
        <section id="contato" className="container my-5 text-center">
            <h1 className="display-4 fw-bold mb-4">Entre em Contato</h1>
            <p className="lead mb-5">
                Estou disponível para novos projetos, colaborações e oportunidades.
                Entre em contato comigo através dos canais abaixo:
            </p>
    
            <div className="row justify-content-center">
                
                <div className="col-md-6 col-lg-4 mb-4">
                    <a href="https://wa.me/5579999645678" className="btn btn-success btn-lg w-100" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <p className="mt-2">Número para contato 👆🏼</p>
                </div>
    
                <div className="col-md-6 col-lg-4 mb-4">
                    <a href="mailto:jhonaton.s.barreto@gmail.com" className="btn btn-primary btn-lg w-100" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i> E-mail
                    </a>
                    <p className="mt-2">Meu Gmail👆🏼</p>
                </div>
            </div>
        </section>
    );
}

export default Contato;