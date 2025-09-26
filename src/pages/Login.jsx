import { useState } from "react";
import '../App.css'

export default function Login({ onLoginSuccess, onRegister, usuarios, onLogin }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const usuarioEncontrado = usuarios.find(
        (u) => u.email === email && u.senha === senha
        );

        if (usuarioEncontrado) {
            onLogin(usuarioEncontrado);
            onLoginSuccess();
        } else {
            setErro("Email ou senha inválidos!");
        }
    };

    return (
        <div>
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

                <a href="#" onClick={onRegister}>Fazer Cadastro</a>

            </form>
        </div>
    )
}