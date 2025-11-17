import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UsuarioContext"
import { rotasPaciente, rotasPsicologo } from "../utils/menuOrder";
import { useSwipeable } from "react-swipeable";

export function useSwipeNavigation () {
    const location = useLocation();
    const navigate = useNavigate();
    const { usuario } = useUser();

    const rotas = usuario?.tipo === "paciente"
        ? rotasPaciente
        : rotasPsicologo;
    
    const indexAtual = rotas.indexOf(location.pathname);

    const mobileHandlers = useSwipeable({
        onSwipedLeft: () => {
            if (indexAtual < rotas.length - 1) {
                navigate(rotas[indexAtual + 1]);
            }
        },
        onSwipedRight: () => {
            if (indexAtual > 0) {
                navigate(rotas[indexAtual - 1]);
            }
        },
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return mobileHandlers;
}