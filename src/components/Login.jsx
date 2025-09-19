import { useState } from "react";
import '../App.css'

export default function Login({ onLoginSuccess, onRegister }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === usuarioFake.email && senha === usuarioFake.senha) {
            setErro("");
            onLoginSuccess();
        } else {
            setErro("Email ou senha incorretos!");
        }
    };

    const usuarioFake = {
        email: "teste@exemplo.com",
        senha: "123456",
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