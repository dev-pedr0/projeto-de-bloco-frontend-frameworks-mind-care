import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({navegacao}) => {
  const [isOpen, setIsOpen] = useState(false);
  const  local = useLocation();

  const handleLinkClick  = (index) => {
    setIsOpen(false);
  };

return (
    <nav className="nav-container">
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Fechar menu"
        >
          ×
        </button>
        <ul className="nav-list">
          {navegacao.map((item, index) => (
            <li key={index}>
              <Link
                to={item.rota}
                className={local.pathname === item.rota ? "ativo" : ""}
                onClick={handleLinkClick}
              >
                {item.nome}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="nav-list desktop">
        {navegacao.map((item, index) => (
          <li key={index}>
            <Link
                to={item.rota}
                className={local.pathname === item.rota ? "ativo" : ""}
                onClick={handleLinkClick}
              >
                {item.nome}
              </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;