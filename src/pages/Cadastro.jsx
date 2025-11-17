import { useRef, useState } from "react"
import '../App.css'
import { useNavigate } from "react-router-dom"
import usuariosFake from "../data/UsuariosFake"
import { useSwipeable } from "react-swipeable";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryState, setCountryState] = useState("");
    const [city, setCity] = useState("");
    const [senha, setSenha] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");
    const navigate = useNavigate();

    const firstInputRef = useRef(null);
    const inputsRefs = [
        firstInputRef,
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const novoUsuario = {
            id: usuariosFake.length + 1,
            tipo: tipoUsuario,
            nome,
            email,
            senha,
            phone,
            estado: countryState,
            cidade: city,
        };
        usuariosFake.push(novoUsuario);

        alert("Cadastro realizado com sucesso! Faça login para continuar.");
        navigate("/login");
    };

    const mobileHandlers = useSwipeable({
        onSwipedUp: () => firstInputRef.current?.focus(),
        onSwipedDown: () => inputsRefs.forEach(ref => ref.current?.blur()),
        onSwipedRight: () => navigate("/login")
    });

    return (
        <div {...mobileHandlers} className="container">
            <form className="form-padrao" onSubmit={handleSubmit}>
                <h2>Boas Vindas ao MindCare</h2>
                <h3>Preencha os Dados Abaixo</h3>
                <input
                    ref={firstInputRef}
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