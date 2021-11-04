context("Search", () => {
  it("Type zip code and wait for an answer", () => {
    // acessa a página
    cy.visit("http://localhost:3000");

    // medida do monitor
    cy.viewport(1024, 768);

    // econtrando e preenchendo um input
    cy.get("input[placeholder='Insira o CEP']").type("01311100");
    cy.get("button[type=button").click();

    // encontrando e clicando um botão
    //cy.contains("Buscar pelo CEP").click()

    //verifica se contem o endereço
    cy.contains("Avenida Paulista");
  });
});
