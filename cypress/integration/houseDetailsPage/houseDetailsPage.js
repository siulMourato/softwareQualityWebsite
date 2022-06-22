Given('I can open the application', () => {
  cy.visit('http://35.192.209.229/');
});

And('access to the landing page', () => {
  cy.get('.pt-6 > .text-4xl').should('have.text', 'Explore Nearby');
});
And('search {string} for houses for today', (Search) => {
  cy.get('.pl-5').type(Search);
  cy.get('.rdrStaticRangeSelected > .rdrStaticRangeLabel').should(
    'have.text',
    'Today',
  );
  cy.get(':nth-child(3) > .text-red-400').click({ force: true });
});
When('I see a list off houses', () => {
  cy.get('.py-7').should('have.length', 7);
  cy.get('.py-7 > .flex-col > .items-end > div > .text-lg').should(
    'have.length',
    7,
  );
  cy.get('.py-7 > .relative > span > .rounded-2xl').should('have.attr', 'src');
});

And('I select {string} and click', (House) => {
  cy.get('#' + House).click({ force: true });
});
Then('I can see right page {string} opened', (House) => {
  cy.get('.text-xl').should('have.text', House.replaceAll('_', ' '));
});
And('I can see that the URL contains {string}', (Search) => {
  cy.location().should((location) => {
    expect(location.pathname).contains(Search);
  });
});
And('I can see short description {string}', (ShortDescriptionType) => {
  cy.get('.text-xl').should('have.text', ShortDescriptionType);
});
And('I can see detailed description {string}', (DetailedDescription) => {
  cy.get('.flex-col > .text-sm').should('have.text', DetailedDescription);
});
And('I can see Price is {string}', (Priceperday) => {
  cy.get('.text-lg').should('contains.text', Priceperday);
});

And('I can see button "Reserve"', () => {
  cy.get('.p-3').should('have.text', 'Reserve now');
});
