describe("TestEveryAccessablePage", () => {
  it("accesses every accessable page", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get("#username").type("marcoweel");
    cy.get("#password").type("123");
    cy.get("#kc-login").click();
  });
});
