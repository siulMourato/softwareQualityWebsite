/// <reference types="Cypress" />
describe('End-to-End test feature "explore nearby"', () => {
  it('scenario I - open portal', () => {
    cy.visit('http://35.192.209.229/')
    cy.get('.pt-6 > .text-4xl')
      .should('have.text', 'Explore Nearby')
  })

  it('scenario II - validate nearby list', () => {
    cy.get('.pt-6 > .grid > :nth-child(1) > :nth-child(2) > h2').should('have.text', 'London')
    cy.get('.pt-6 > .grid > :nth-child(1)').click().as('londonBtn')
  })

  it('scenario III - validate if london is in URL', () => {
    cy.location().should((location) => {
      expect(location.pathname).contains('london');
    });
  })


  it('scenario IV - validate if list makes sense with filter applied previously', () => {
    cy.get('.text-3xl').should('contain.text', 'London')
    cy.get('.pt-14 > :nth-child(4) > :nth-child(1)').should('contain.text', 'London')
  })

  it('scenario V - for each item list should be located in london', () => {
    cy.get('.py-7 > .flex-col > :nth-child(1) > p').should('have.length', 7)
  })


})
