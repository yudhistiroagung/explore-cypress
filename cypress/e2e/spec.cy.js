describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('#field-\:r1\:').type('Automate using cypress')

    cy.get('Add Todo').click()
  })
})