describe("TestEveryAccessablePage", () => {
  it("accesses every accessable page", () => {
    cy.visit("http://localhost:3000");
    cy.get('[href="/posts"]').click();
    cy.wait(3000);
    cy.get('[href="/events"]').click();
    cy.wait(3000);
    cy.get('[href="/members"]').click();
    cy.wait(3000);
    cy.get(".navbar-brand").click();
    cy.wait(3000);
    cy.get(":nth-child(3) > .nav-link").click();
  });
});
