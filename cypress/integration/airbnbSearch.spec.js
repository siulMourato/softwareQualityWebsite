/// <reference types="Cypress" />

const { getDate } = require("date-fns")

describe('End-to-End test feature "search"', () => {

    it('scenario I - validate portal was correctly opened', () => {
        cy.visit('http://35.192.209.229/')
        cy.get('.pl-5').type("London")
        cy.log('First page')
        cy.get('.pt-6 > .text-4xl').should('have.text', 'Explore Nearby')
    })

    it('scenario II - apply filter', () => {
        cy.get('.w-12').clear().type("0")
        cy.get('.rdrStaticRangeSelected > .rdrStaticRangeLabel').should('have.text', 'Today')
    })

    it('scenario III - Validate yesterday filter options', () => {
        const d = new Date();
        let date = d.getDate() - 1;
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').should('have.text', 'Yesterday')
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').click()
        cy.get('.rdrDayDisabled > .rdrStartEdge').parent('.rdrDayDisabled').should('have.text', date)
    })
    it('scenario IV - Validate today filter options', () => {
        const d = new Date();
        let date = d.getDate();
        cy.get(':nth-child(1) > .rdrStaticRangeLabel').should('have.text', 'Today');
        cy.get(':nth-child(1) > .rdrStaticRangeLabel').click();
        cy.get('.rdrDayToday').should('have.text', date);
    })

    it('scenario V - Validate last week filter options', () => {
        const now = new Date();
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 7);
        const endOfWeek = new Date(now.getFullYear(), now.getMonth(), startOfWeek.getDate() + 6)
        cy.get(':nth-child(4) > .rdrStaticRangeLabel').should('have.text', 'Last Week');
        cy.get(':nth-child(4) > .rdrStaticRangeLabel').click();
        cy.get('.rdrDayStartOfWeek > .rdrStartEdge').parent('.rdrDayDisabled').should('have.text', startOfWeek.getDate());
        cy.get('.rdrDayEndOfWeek > .rdrEndEdge').parent('.rdrDayDisabled').should('have.text', endOfWeek.getDate());

    })
    
    it('scenario VI - Validate this week filter options', () => {
        const now = new Date()
        const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay())
        const endOfWeek = new Date(now.getFullYear(), now.getMonth(), startOfWeek.getDate() + 6)
        cy.get(':nth-child(3) > .rdrStaticRangeLabel').should('have.text', 'This Week');
        cy.get(':nth-child(3) > .rdrStaticRangeLabel').click();
        cy.get('.rdrDayStartOfWeek > .rdrStartEdge').parent('.rdrDayStartOfWeek').should('have.text', startOfWeek.getDate());
        cy.get('.rdrDayEndOfWeek > .rdrEndEdge').parent('.rdrDayEndOfWeek').should('have.text', endOfWeek.getDate());
    })

    it('scenario VII - Validate this month filter options', () => {
        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), '01')
        var lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        cy.get(':nth-child(5) > .rdrStaticRangeLabel').should('have.text', 'This Month');
        cy.get(':nth-child(5) > .rdrStaticRangeLabel').click();
        cy.get('.rdrDayStartOfMonth > .rdrStartEdge').parent('.rdrDayStartOfMonth').should('have.text', startOfMonth.getDate());
        cy.get('.rdrDayEndOfMonth > .rdrEndEdge').parent('.rdrDayEndOfMonth').should('have.text', lastDayOfMonth.getDate());
    })
    
    it('scenario VIII - Validate last month filter options', () => {
        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, '01')
        var lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        cy.get(':nth-child(6) > .rdrStaticRangeLabel').should('have.text', 'Last Month');
        cy.get(':nth-child(6) > .rdrStaticRangeLabel').click();
        cy.get('.rdrDayStartOfMonth > .rdrStartEdge').parent('.rdrDayStartOfMonth').should('have.text', startOfMonth.getDate());
        cy.get('.rdrDayEndOfMonth > .rdrEndEdge').parent('.rdrDayEndOfMonth').should('have.text', lastDayOfMonth.getDate());
    })

    it('scenario IX - Validate days up today filter options', () => {
        cy.get(':nth-child(1) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(1) > .rdrInputRangeInput').type(9)
        const now = new Date()
        var lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 18);
        cy.get('.rdrDayToday').should('have.text', now.getDate());
        cy.get('.rdrDayDisabled > .rdrStartEdge').parent('.rdrDayDisabled').should('have.text', lastDayOfMonth.getDate());
    })

    it('scenario X - Validate days starting today filter options', () => {
        cy.get(':nth-child(2) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(9)
        const now = new Date()
        cy.get('.rdrDayToday').should('have.text', now.getDate());
    })

    it('scenario XI - Validate number of guests filter options', () => {
        cy.get(':nth-child(2) > .rdrInputRangeInput').clear()
        cy.get(':nth-child(2) > .rdrInputRangeInput').type(9)
        cy.get(':nth-child(2) > .rdrStaticRangeLabel')
        cy.get(':nth-child(2) > .rdrStaticRangeLabel').click()
        cy.get('.rdrDayDisabled > .rdrStartEdge').should('have.length', "1")
    })

    it('scenario XII - button search shows list of houses to loan', () => {
        cy.get(':nth-child(3) > .text-red-400').click()
        cy.get('.text-3xl').should('have.text', 'Stays in London')
    })

    it('scenario XIII - number of items displayed should be 7', () => {
        cy.get('.py-7').should('have.length', 7)
        cy.get('.py-7 > .flex-col > .items-end > div > .text-lg').should('have.length', 7)
        cy.get('.py-7 > .relative > span > .rounded-2xl').should('have.attr', 'src')
    })

    it('scenario XIV - The context page should be London', () => {
        cy.get('.text-3xl').should('contain.text', 'London')
        cy.get(':nth-child(1) > .py-7 > .flex-col > :nth-child(1) > p').should('have.length', 1)
        cy.location().should((location) => {
            expect(location.pathname).contains('/search');
        });
        cy.url().should('contain', '?location=London')
    })

    it('scenario XV - Check first element is placed in london', () => {
        cy.get('#Stay_at_this_spacious_Edwardian_House > .py-7 > .flex-col > :nth-child(1) > p').should('contain.text', 'London')
        cy.get(':nth-child(1) > .py-7 > .flex-col > :nth-child(1) > p').should('have.length', 1)
    })

})
