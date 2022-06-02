

Given(/^I open the application/, () => {
    cy.visit('http://35.228.39.139/')
});
 
Given(/^access to the landing page$/, () => {
    cy.get('h2')
            .contains('Explore Nearby')
});

Given(/^I click on become a host option $/, () => {
    cy.get('h1')
            .contains('todos')
    cy.get('.todo-list li').should('have.length', 2)
});

Given(/^access to the landing page$/, () => {
    cy.get('h1')
            .contains('todos')
    cy.get('.todo-list li').should('have.length', 2)
});

When(/^search for houses$/, function (datatable) {
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
 
Given(/^I see a list off houses$/, () => {
    cy.get('h1')
            .contains('todos')
    cy.get('.todo-list li').should('have.length', 2)
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