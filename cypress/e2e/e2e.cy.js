describe('empty spec', () => {
  it('can login and logout', () => {
    cy.visit('http://localhost:8080/');
    cy.wait(5000);
    cy.contains('Login').click();
    cy.contains('Don\'t have an account? Register');
    cy.get('input').first().type("mikey@gmail.com", { force: true });
    cy.get('input').eq(1).type("mikey", { force: true });
    cy.get('button').eq(1).click({ force: true });
    cy.contains('Add Job');
    cy.contains('Logout').click();
    cy.contains('Login');
  });
})