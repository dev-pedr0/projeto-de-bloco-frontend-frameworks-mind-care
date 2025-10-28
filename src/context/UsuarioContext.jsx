import { createContext, useContext, useEffect, useState } from "react";

const UsuarioContext = createContext();

export const useUser = () => useContext(UsuarioContext);

export function UsuarioProvider ({children}) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuarioLogado");
        if (usuarioSalvo) {
        setUsuario(JSON.parse(usuarioSalvo));
        }
    }, []);

    const login = (usuario) => {
        setUsuario(usuario);
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    };

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem("usuarioLogado");
    };

     const value = {
        usuario,
        login,
        logout,
        isAuthenticated: !!usuario,
    };

    return (
        <UsuarioContext.Provider value={value}>{children}</UsuarioContext.Provider>
    )
}