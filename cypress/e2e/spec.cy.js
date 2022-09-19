describe('empty spec', () => {
  it('passes', () => {
    // open the app
    cy.visit('https://github.com');

    // click on hamburger menu
    cy.get('.text-right > .js-details-target')
      .click();

    // type jake wharton on search bar input
    cy.get('.header-search-wrapper > .form-control')
      .type('jake wharton{enter}');

    // scroll to bottom page
    cy.scrollTo(0, 1000);

    // click on repo nmwilk/soms-jw
    cy.get('.col-md-9 > div.px-2')
      .contains('nmwilk/soms-jw')
      .click()

    // click on app pakage on project
    cy.get('.Details-content--hidden-not-important > :nth-child(2)')
      .contains('app')
      .click()
  })
})