import { Outlet, useNavigate } from "react-router-dom"
import { useUser } from "../context/UsuarioContext"
import Nav from "../components/Nav";

export default function Home() {
    const { usuario, logout } = useUser();
    const navigate = useNavigate();

    if (!usuario) {
        navigate("/login");
        return null;
    }
    
    const navegacao =
        usuario.tipo === "paciente" ?
        [
            { nome: "Agendar Consulta", rota: "/home/consultas" },
            { nome: "Progresso Terapêutico", rota: "/home/progresso" },
            { nome: "Documentos", rota: "/home/documentos" },
            { nome: "Conversa com Terapeuta", rota: "/home/conversa" },
        ] :
        [
            { nome: "Agenda de Horários", rota: "/home/horarios" },
            { nome: "Anotações", rota: "/home/anotacoes" },
            { nome: "Documentos", rota: "/home/documentos" },
            { nome: "Conversa com Paciente", rota: "/home/conversa" },
        ];

    return (
        <div className="container">
            <header className="header">
                <h1>MindCare - Um Espaço Acolhedor</h1>
                 <button onClick={logout} className="button-sair">
                    x
                </button>
            </header>
            <main className="main">
                <Nav navegacao={navegacao}/> 
                <div className="content-container">
                    <Outlet/>
                </div>   
            </main>
            <footer>
                <p>Todos os direitos reservados</p>
            </footer>
        </div>

  );
}