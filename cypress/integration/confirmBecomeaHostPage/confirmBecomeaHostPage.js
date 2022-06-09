const { Given } = require("@cucumber/cucumber");

Given(/^I can open the application/, () => {
    cy.visit('http://35.192.209.229/')
});
 
Given(/^access to the landing page$/, () => {
    cy.get('h1')
            .contains('todos')
    
    cy.get('.todo-list li').should('have.length', 2)
});

Given(/^I click on become a host option $/, () => {
    cy.get('h1')
            .contains('todos')
    cy.get('.todo-list li').should('have.length', 2)
});

Given(/^I enter following details $/, () => {
    cy.get('h1')
            .contains('todos')
    cy.get('.todo-list li').should('have.length', 2)
});

When(/^I enter following details:$/, function (datatable) {
    var formVals = datatable.rowsHash();
    // formVals will be a object { "Name" : "Minium", "Home Page" : ... }
    for (var field in formVals) {
      var val = formVals[field];
      var field = $("input, select, textarea").withLabel(field).waitForExistence();
      if (field.is(":checkbox, :radio")) {
        if (val === "true") field.click();
      } else if (field.is("select")) {
        field.select(val);
      } else {
        // fallback, just fill
        field.fill(val);
      }
    }
});
 
Given(/^I click "([^"]*)" $/, () => {
    cy.get('.new-todo')
        .type("\r")
});

Given(/^Then I can see that the "([^"]*)" $/, () => {
    cy.get('.new-todo')
        .type("\r")
});

Given(/^search for houses i write "([^"]*)" $/, () => {
    cy.get('.new-todo')
        .type("\r")
});
Given(/^click on search button$/, () => {
    cy.get('.new-todo')
        .type("\r")
});
Given(/^I can see that the "([^"]*)"$/, () => {
    cy.get('.new-todo')
        .type("\r")
});
Given(/^All some attributes filled$/, () => {
    cy.get('.new-todo')
        .type("\r")
});