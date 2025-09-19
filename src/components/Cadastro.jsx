import { useState } from "react";
import '../App.css'

export default function Cadastro({onRegisterSuccess}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegisterSuccess();
    };

    return (
        <div>
            <form className="form-padrao" onSubmit={handleSubmit}>
                <h2>Boas Vindas ao MindCare</h2>
                <h3>Preencha os Dados Abaixo</h3>
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

                <button type="submit">
                    Cadastrar
                </button>


            </form>
        </div>
    )
}