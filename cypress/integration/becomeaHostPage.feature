Feature: Become a host webpage
  As a user
  I want to become a host
  So that I can see survey with list of fields to be filled in and after submit to become a host
  Scenario: Fill become a host webpage with correct values
    Given I can open the application
    And access to the landing page

  Scenario Outline: Fill become a host webpage with correct values
    Given I can open the application
    And access to the landing page
    And I click on become a host option
    And I will see the become a host form
    When I fill hostname as '<HostName>' and ShortDescriptionType as '<ShortDescriptionType>' and DetailedDescription as '<DetailedDescription>' and Priceperday as '<Priceperday>' and MemberName as '<MemberName>' and MemberCity as '<MemberCity>' and MemberZipCode as '<MemberZipCode>' and Number as '<Number>' and TaxNumber as '<TaxNumber>' and EmailAddress as '<EmailAddress>'
    And I click "submit button"
    Then I can see that the success creation page
    Examples: 
      | HostName   | ShortDescriptionType                 | DetailedDescription              | Priceperday      | MemberName  | MemberCity            | MemberZipCode             | Number    | TaxNumber  | EmailAddress            |
      | Host A     | This is a short description host a   | This is a detailed description   | 320              | Test User   | Leiria                | 1234-567                  | 18        | 123456789  | teste1@estg.ipleiria.pt |
      | Host B     | This is a short description host b   | This is a detailed description   | 190              | Test User   | Lisboa                | 1234-567                  | 19        | 123456789  | teste2@estg.ipleiria.pt |
      | Host C     | This is a short description host c   | This is a detailed description   | 200              | Test User   | Alcobaça              | 1234-567                  | 19        | 123456789  | teste3@estg.ipleiria.pt |
      | Host D     | This is a short description host c   | This is a detailed description   | 200              | Test User   | Alcobaça              | 1234-567                  | 19        | 123456789  | teste3@estg.ipleiria.pt |

  