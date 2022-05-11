Feature: Become a host
  As a user
  I want to become a host
  So that I can see survey with list of fields to be filled in and after submit to become a host
  Scenario: Fill become a host webpage with correct values
    Given I can open the application
    And access to the landing page
    And I click on become a host option
    And I will see the become a host form
    And I enter following details
    And I fill <Host Name>
    And I fill <Short Description Type>
    And I fill <Detailed Description>
    And I fill <Price per day>
    And I fill <Member Name>
    And I fill <Member City>
    And I fill <Member ZipCode>
    And I fill <Number>
    And I fill <TaxNumber>
    And I click "submit button"
    Then I can see that the success creation page
    
    Examples: 
      | Host Name  | Short Description Type               | Detailed Description             | Price per day    | Member Name | Member City           | Member ZipCode            | Number    | TaxNumber  |                      
      | Host A     | This is a short description host a   | This is a detailed description   | 320              | Test User   | Leiria                | 1234-567                  | 18        | 123456789  |
      | Host B     | This is a short description host b   | This is a detailed description   | 190              | Test User   | Lisboa                | 1234-567                  | 19        | 123456789  |

  Scenario: Fill become a host webpage without correct values
    Given I can open the application
    And access to the landing page
    And I click on become a host option
    And I will see the become a host form
    And I enter following details
    And I fill <Host Name>
    And I fill <Short Description Type>
    And I fill <Detailed Description>
    And I fill <Price per day>
    And I fill <Member Name>
    And I fill <Member City>
    And I fill <Member ZipCode>
    And I fill <Number>
    And I fill <TaxNumber>
    And I click "submit button"
    When I can see the <Expected Error>

    Examples: 
    | Host Name  | Short Description Type               | Detailed Description             | Price per day    | Member Name | Member City           | Member ZipCode            | Number    | TaxNumber  | Expected Error                     
    | Host A     | This is a short description host a   | This is a detailed description   | 320              | Test User   | Leiria                |                           | 18        | 123456789  | required attribute
  
