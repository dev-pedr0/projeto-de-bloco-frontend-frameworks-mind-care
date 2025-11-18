import { vi } from "vitest";

// Mock do módulo UsuariosFake
vi.mock("../data/UsuariosFake", () => {
  const usuarioMock = {
    id: 1,
    email: "t@t.com",
    senha: "1234",
    tipo: "paciente",
  };

  return {
    default: [usuarioMock],
  };
});

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";
import { mockLogin, mockNavigate } from "../test/setupTests";

describe("Login page", () => {

  beforeEach(() => {
    mockLogin.mockReset();
    mockNavigate.mockReset();
  });

  test("deve renderizar o título de Login", () => {
    render(<Login />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test("mostra erro ao enviar credenciais inválidas", async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    const senhaInput = screen.getByPlaceholderText(/digite sua senha/i);
    const botao = screen.getByRole("button", { name: /entrar/i });

    await userEvent.type(emailInput, "invalido@test.com");
    await userEvent.type(senhaInput, "senhaerrada");
    await userEvent.click(botao);

    const mensagemErro = await screen.findByText(/email ou senha inválidos/i);
    expect(mensagemErro).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });

  test("quando credenciais válidas chama login() e navega para /home", async () => {

    render(<Login />);

    await userEvent.type(
      screen.getByPlaceholderText(/digite seu email/i),
      "t@t.com"
    );

    await userEvent.type(
      screen.getByPlaceholderText(/digite sua senha/i),
      "1234"
    );

    await userEvent.click(
      screen.getByRole("button", { name: /entrar/i })
    );

    expect(mockLogin).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/home");
  });
});