

Given(/^I can open the application/, () => {
    cy.visit('http://35.192.209.229/')
});

Given(/^access to the landing page$/, () => {
    cy.get('h2')
        .contains('Explore Nearby')
});

Given(/^I click on become a host option$/, () => {
    cy.get('#becomeHost').click().as('becomehost');
    
});

And(/^I will see the become a host form$/, () => {
    cy.get('#becomeHost').click().as('becomeHost')
    cy.location().should((location) => {
        expect(location.pathname).contains('/becomehost');
    });
    //check pagename
});
When('I fill hostname as {string} and ShortDescriptionType as {string} and DetailedDescription as {string} and Priceperday as {string} and MemberName as {string} and MemberCity as {string} and MemberZipCode as {string} and Number as {string} and TaxNumber as {string} and EmailAddress as {string} and ErrorAttribute as {string}', (HostName, ShortDescriptionType, DetailedDescription, Priceperday, MemberName, MemberCity, MemberZipCode, Number, TaxNumber, EmailAddress, ErrorAttribute) => {
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
    //not pretty by cypress doesnt support empty values 
    if ((HostName.includes("[blank]") || ShortDescriptionType.includes("[blank]") || DetailedDescription.includes("[blank]") || Priceperday == "0"
        || MemberName.includes("[blank]") || MemberCity.includes("[blank]") || MemberZipCode.includes("[blank]") || Number.includes("[blank]") || TaxNumber.includes("[blank]")
        || EmailAddress.includes("[blank]"))) {
        cy.get('#' + ErrorAttribute).clear() /*to clean attribute that we want to force error*/
    }
})


And(/^I click "submit button"$/, () => {
    cy.get('.shadow').click().as('becomeHost')
})

Then('I can see the {string} with error {string}', (ErrorAttribute, ExpectedError) => {
    cy.get('#Error' + ErrorAttribute).contains(ExpectedError)
});

And(/^I can see the same page$/, () => {
    //check url is the same
    cy.location().should((location) => {
        expect(location.pathname).contains('/becomehost');
    });
});

