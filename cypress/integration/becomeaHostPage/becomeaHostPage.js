

Given(/^I can open the application/, () => {
    cy.visit('http://localhost:3000')
});

Given(/^access to the landing page$/, () => {
    cy.get('h2')
        .contains('Explore Nearby')
});

Given(/^I click on become a host option$/, () => {
    cy.get('#becomeHost').click().as('becomehost')
});
And(/^I will see the become a host form$/, () => {
    cy.get('#becomeHost').click().as('becomehost')
    cy.location().should((location) => {
        expect(location.pathname).contains('/becomehost');
    });
});
//oldest source
/*When('I fill hostname as {string} and ShortDescriptionType as {string} and DetailedDescription as {string} and Priceperday as {string} and MemberName as {string} and MemberCity as {string} and MemberZipCode as {string} and Number as {string} and TaxNumber as {string} and EmailAddress as {string}', (HostName, ShortDescriptionType, DetailedDescription, Priceperday, MemberName, MemberCity, MemberZipCode, Number, TaxNumber, EmailAddress) => {
    cy.get('#HostName').type(HostName)
    cy.get('#ShortDescriptionType').type(ShortDescriptionType)
    cy.get('#DetailedDescription').type(DetailedDescription)
    cy.get('#PricePerDay').type(Priceperday)
    cy.get('#MemberName').type(MemberName)
    cy.get('#MemberCity').type(MemberCity)
    cy.get('#MemberZipCode').type(MemberZipCode)
    cy.get('#Number').type(Number)
    cy.get('#TaxNumber').type(TaxNumber)
    cy.get('#MemberEmailAddress').type(EmailAddress)
})*/


When('I fill hostname as {string}', (HostName) => {
    cy.get('#HostName').type(HostName);
})

And('I fill short description type as {string}', (ShortDescriptionType) => {
    cy.get('#ShortDescriptionType').type(ShortDescriptionType);
})


And('I fill detailed description as {string}', (DetailedDescription) => {
    cy.get('#DetailedDescription').type(DetailedDescription);
})

And('I fill priceperday as {string}', (Priceperday) => {
    cy.get('#PricePerDay').type(Priceperday);
})

And('I fill member city as {string}', (MemberCity) => {
    cy.get('#MemberCity').type(MemberCity);
})

And('I fill member name as {string}', (MemberName) => {
    cy.get('#MemberName').type(MemberName);
})

And('I fill member zipcode as {string}', (MemberZipCode) => {
    cy.get('#MemberZipCode').type(MemberZipCode);
})

And('I fill number as {string}', (Number) => {
    cy.get('#Number').type(Number);
})

And('I fill tax number as {string}', (TaxNumber) => {
    cy.get('#TaxNumber').type(TaxNumber);
})

And('I fill email address as {string}', (EmailAddress) => {
    cy.get('#MemberEmailAddress').type(EmailAddress);
})

And(/^I click "submit button"$/, () => {
    cy.get('.shadow').click().as('becomeHost')
})
Then(/^I can see that the success creation page$/, () => {
    //text
    cy.location().should((location) => {
        expect(location.pathname).contains('/success');
    });

    cy.get('h1').should('have.text', 'New member added with success')
});