import React from "react";
import '@testing-library/jest-dom';
import { vi } from "vitest";

// mocks globais
const mockLogin = vi.fn();
const mockNavigate = vi.fn();

// mock do contexto
vi.mock('../context/UsuarioContext', () => ({
  useUser: () => ({
    usuario: null,
    login: mockLogin,
    logout: vi.fn(),
  }),
  UsuarioProvider: ({ children }) => children,
}));

// mock do react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
    Link: ({ children, to }) =>
      React.createElement("a", { href: to }, children),
  };
});

export { mockLogin, mockNavigate };