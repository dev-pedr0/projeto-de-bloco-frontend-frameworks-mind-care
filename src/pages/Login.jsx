import { useState } from "react"
import '../App.css'
import { Link, useNavigate } from "react-router-dom"
import usuariosFake from "../data/UsuariosFake"
import { useUser } from "../context/UsuarioContext"

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuarioEncontrado = usuariosFake.find(
        (u) => u.email === email && u.senha === senha
        );

        if (usuarioEncontrado) {
            login(usuarioEncontrado);

            navigate("/home");
        } else {
            setErro("Email ou senha inválidos!");
        }
    };

    return (
        <div className="container">
            <form className="form-padrao" onSubmit={handleSubmit}>
                <h2>Boas Vindas ao MindCare</h2>
                <h3>Realize seu Login</h3>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />

                {erro && <p className="erro">{erro}</p>}

                <button type="submit">
                    Entrar
                </button>

                <p>
                    Não tem conta?{" "}
                    <Link to="/cadastro">Fazer Cadastro</Link>
                </p>
            </form>
        </div>
    )
}