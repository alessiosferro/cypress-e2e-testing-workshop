describe('User registration', () => {
  it('Should add a new user', () => {
    cy.visit("/")
    cy.get("[data-cy='first-name']").type("Alessio");
    cy.get("[data-cy='last-name']").type("Sferro");
    cy.get("[data-cy='email']").type("sferro.alessio@gmail.com{enter}");
    cy.contains("Dati inseriti");
  });
});