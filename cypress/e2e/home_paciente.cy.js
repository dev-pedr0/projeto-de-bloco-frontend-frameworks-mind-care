describe("Home do paciente", () => {

  it("paciente deve ver apenas as telas corretas", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("input[placeholder='Digite seu email']").type("joao@email.com");
    cy.get("input[placeholder='Digite sua senha']").type("123456");

    cy.contains("button", /entrar/i).click();

    cy.url({ timeout: 8000 }).should("include", "/home");

    const opcoesPaciente = [
      "Agendar Consulta",
      "Progresso Terapêutico",
      "Documentos",
      "Conversa com Terapeuta",
    ];

    opcoesPaciente.forEach(opcao => {
      cy.contains(opcao).should("exist");
    });

    const opcoesPsicologo = [
      "Agenda de Horários",
      "Anotações",
      "Conversa com Paciente"
    ];

    opcoesPsicologo.forEach(opcao => {
      cy.contains(opcao).should("not.exist");
    });

  });

});