
Given(/^I open the application$/, () => {
    cy.visit('http://35.192.209.229/')
});
 
Given(/^access to the landing page$/, () => {
    cy.get('h1').contains('todos')
    
    cy.get('.todo-list li').should('have.length', 2)
});
 
When(/^I write "([^"]*)" in the list's input field$/, (arg0,) => {
    cy.get('.new-todo')
            .type("Run 5 miles")
});
 
When(/^I submit the information$/, () => {
    cy.get('.new-todo')
        .type("\r")
});
 
Then(/^I can see that the "([^"]*)" was added to the list$/, (arg0,) => {
});
 
Then(/^the list has one additional item$/, () => {
   
});