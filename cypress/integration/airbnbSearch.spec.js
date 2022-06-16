/// <reference types="Cypress" />

const { getDate } = require("date-fns")

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
    })
       
    it('scenario III - Validate yesterday filter options', () => {
        cy.get(':nth-child(2) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(18)
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').should('have.text', 'Yesterday')
        cy.get(':nth-child(2) > .rdrStaticRangeLabel') 
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').click()
        cy.get('.rdrDayDisabled > .rdrStartEdge').should('have.length',"1")
        
    })

    it('scenario IV - Validate last week filter options', () => {
        
    })
    it('scenario V - Validate this week filter options', () => {
        
    })
    it('scenario VI - Validate this month filter options', () => {
        cy.get(':nth-child(2) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(18)
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').should('have.text', 'Yesterday')
        cy.get(':nth-child(2) > .rdrStaticRangeLabel') 
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').click()
        cy.get('.rdrDayDisabled > .rdrStartEdge').should('have.length',"1")
        
    })
    it('scenario VII - Validate last month filter options', () => {
        cy.get(':nth-child(2) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(18)
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').should('have.text', 'Yesterday')
        cy.get(':nth-child(2) > .rdrStaticRangeLabel') 
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').click()
        cy.get('.rdrDayDisabled > .rdrStartEdge').should('have.length',"1")
        
    })

    it('scenario VIII - Validate number of guests filter options', () => {
        cy.get(':nth-child(2) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(18)
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').should('have.text', 'Yesterday')
        cy.get(':nth-child(2) > .rdrStaticRangeLabel') 
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').click()
        cy.get('.rdrDayDisabled > .rdrStartEdge').should('have.length',"1")
        
    })
/*
    var d = new Date(); // Today!
    var aux = d.setDate(d.getDate() - 1); 
    cy.get('.py-7').should('have.length', 7)    
  */
    
    it('scenario IX - button search shows list of houses to loan', () => {
        cy.get(':nth-child(3) > .text-red-400').click()
        cy.get('.text-3xl').should('have.text', 'Stays in London')
    })


    it('scenario X - number of items displayed should be 7', () => {
        cy.get('.py-7').should('have.length', 7)
        cy.get('.py-7 > .flex-col > .items-end > div > .text-lg').should('have.length',7)
        cy.get('.py-7 > .relative > span > .rounded-2xl').should('have.attr','src')

    })
    
    //:nth-child(1) > 
    ///_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fxqj&w=3840&q=75
  
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
