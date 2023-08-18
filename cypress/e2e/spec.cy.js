describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sanzhanov.github.io/')
    cy.get('h1').should('have.text', 'Welcome everyone to my web-site!')
  })
})