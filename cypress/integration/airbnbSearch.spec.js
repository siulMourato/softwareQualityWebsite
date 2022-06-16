/// <reference types="Cypress" />
describe('End-to-End test feature "search"', () => {

    it('scenario I - validate portal was correctly opened', () => {
        cy.visit('http://35.192.209.229/')
        cy.get('.pl-5').type("London")
        cy.log('First page')
        cy.get('.pt-6 > .text-4xl') .should('have.text', 'Explore Nearby')
    })

    it('scenario II - apply filter', () => {
        cy.get('.w-12').clear().type("0")
        cy.get('.rdrStaticRangeSelected > .rdrStaticRangeLabel').should('have.text', 'Today')
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(18)
    })
    
    it('scenario III - button search shows list of houses to loan', () => {
        cy.get(':nth-child(3) > .text-red-400').click()
        cy.get('.text-3xl').should('have.text', 'Stays in London')
    })

    

        
    it('scenario IV - number of items displayed should be 7', () => {
        cy.get('.py-7').should('have.length', 7)
    })
    

        /*


    it('scenario V - The context page should be Lond', () => {
        cy.get('.text-3xl').should('contain.text', 'London')
        cy.get('.py-7 > .flex-col > :nth-child(1) > p').should('have.length', 1)
        
        cy.get(':nth-child(1) > .py-7 > .flex-col > :nth-child(1) > p').should('have.length', 1)
        cy.location().should((location) => {
            expect(location.pathname).contains('/search');
        });
        cy.url().should('contain', '?location=London')
    })

    it('scenario V - The context page should be London', () => {
        cy.get('.text-3xl').should('contain.text', 'London')
        cy.get('.py-7 > .flex-col > :nth-child(1) > p').should('have.length', 1)

        
        cy.get(':nth-child(1) > .py-7 > .flex-col > :nth-child(1) > p').should('have.length', 1)
        cy.location().should((location) => {
            expect(location.pathname).contains('/search');
        });
        cy.url().should('contain', '?location=London')
    })

*/

})
