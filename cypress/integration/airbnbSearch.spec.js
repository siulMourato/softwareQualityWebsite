/// <reference types="Cypress" />
describe('End-to-End test feature "search"', () => {

    it('scenario I - validate portal was correctly opened', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.pl-5').type("Portugal")
        cy.log('First page')
        cy.get('.pt-6 > .text-4xl')
            .should('have.text', 'Explore Nearby')
    })

    it('scenario II - apply filter', () => {
        cy.get('.w-12').clear().type("0")
        cy.get('.rdrStaticRangeSelected > .rdrStaticRangeLabel').should('have.text', 'Today')
    })

    it('scenario III - button search shows list of houses to loan', () => {
        cy.get(':nth-child(3) > .text-red-400').click()
        cy.get('.text-3xl').should('have.text', 'Stays in Portugal')
    })

    it('scenario IV - number of items displayed should be 7', () => {
        cy.get('.flex .flex-col').children('.flex>.py-7')
            .should('have.length', 7)
    })

    it('scenario V - The context page should be Portugal', () => {
        cy.get('.text-3xl').should('contain.text', 'Portugal')
        cy.get('.flex .flex-col').children('.flex>.py-7').should('have.length', 7)
        cy.location().should((location) => {
            expect(location.pathname).contains('/search');
        });
        cy.url().should('contain', '?location=Portugal')
    })
})


