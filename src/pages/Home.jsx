import Nav from "../components/Nav";
import Horarios from "../components/profissional/Horarios";
import Consultas from "../components/paciente/Consultas";
import { useState } from "react";
import Anotacoes from "../components/profissional/Anotacoes";
import Progresso from "../components/paciente/Progresso";
import Documentos from "../components/Documentos";
import Conversa from "../components/Conversa";


export default function Home({ onLogout, usuario }) {
    const [currentPage, setCurrentPage] = useState(0);
    let navegacao = [];

    if (usuario?.tipo === "paciente") {
        navegacao = ["Agendar Consulta", "Progresso Terapeutico", "Documentos", "Conversa com Terapeuta"];
    } else if (usuario?.tipo === "psicologo") {
        navegacao = ["Agenda de Horários", "Anotações", "Documentos", "Conversa com Paciente"];
    }
    
    function renderMainContent() {
        if (currentPage === 0 && usuario.tipo === "psicologo") {
            return (
                <Horarios/>
            );
        } else if (currentPage === 0 && usuario.tipo === "paciente") {
            return (
                <Consultas/>
            );
        }

        if (currentPage === 1 && usuario.tipo === "psicologo") {
            return (
                <Anotacoes/>
            );
        } else if (currentPage === 1 && usuario.tipo === "paciente") {
            return (
                <Progresso/>
            );
        }

        if (currentPage === 2) {
            return (
                <Documentos/>
            );
        }

        if (currentPage === 3) {
            return (
                <Conversa/>
            );
        }
    }

    return (
        <div className="container">
            <header className="header">
                <h1>MindCare - Um Espaço Acolhedor</h1>
                <button onClick={onLogout} className="button-sair">
                    x
                </button>
            </header>
            <main className="main">
                <Nav navegacao={navegacao} onSelect={setCurrentPage}/> 
                <div className="content-container">
                    {renderMainContent()}
                </div>   
            </main>
            <footer>
                <p>Todos os direitos reservados</p>
            </footer>
        </div>

  );
}