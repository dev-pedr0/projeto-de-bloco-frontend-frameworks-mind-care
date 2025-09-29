import { useState } from "react";

const Nav = ({navegacao, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (index) => {
    onSelect(index);
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
              <a href="#" onClick={() => handleSelect(index)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <ul className="nav-list desktop">
        {navegacao.map((item, index) => (
          <li key={index}>
            <a href="#" onClick={() => handleSelect(index)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;