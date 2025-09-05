import React from 'react';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import './App.css'; // Importa seu arquivo de estilo
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#inicio">Meu Portfólio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#inicio">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projetos">Projetos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#sobre">Sobre Mim</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Home />
            <Projetos />
            <Sobre />
            <Contato />

            <footer className="bg-dark text-white text-center py-3">
                <div className="container">
                    <p className="mb-0">&copy; 2025 Jhonaton Salgueiro. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default App;