import { useState } from "react";
import '../App.css'

export default function Cadastro({onRegisterSuccess}) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryState, setCountryState] = useState("");
    const [city, setCity] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState(""); 

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
                    type="text"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Digite seu telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Digite seu estado"
                    value={countryState}
                    onChange={(e) => setCountryState(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Digite sua cidade"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <select
                    id="tipo"
                    value={tipoUsuario}
                    onChange={(e) => setTipoUsuario(e.target.value)}
                    className="border rounded p-2"
                >
                    <option value="">-- Selecione --</option>
                    <option value="psicologo">Psicólogo</option>
                    <option value="paciente">Paciente</option>
                </select>

                <button type="submit">
                    Cadastrar
                </button>


            </form>
        </div>
    )
}