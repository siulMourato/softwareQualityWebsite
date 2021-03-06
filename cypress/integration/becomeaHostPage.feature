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
    When I fill hostname as '<HostName>'
    And I fill short description type as '<ShortDescriptionType>'
    And I fill detailed description as '<DetailedDescription>'
    And I fill priceperday as '<Priceperday>'
    And I fill member name as '<MemberName>'
    And I fill member city as '<MemberCity>'
    And I fill member zipcode as '<MemberZipCode>'
    And I fill number as '<Number>'
    And I fill tax number as '<TaxNumber>'
    And I fill email address as '<EmailAddress>'
    And I click "submit button"
    Then I can see that the success creation page
    Examples:
      | HostName | ShortDescriptionType               | DetailedDescription            | Priceperday | MemberName | MemberCity | MemberZipCode | Number | TaxNumber | EmailAddress            |
      | Host A   | This is a short description host a | This is a detailed description | 320         | Test User  | Leiria     | 1234-567      | 18     | 123456789 | teste1@estg.ipleiria.pt |
      | Host B   | This is a short description host b | This is a detailed description | 190         | Test User  | Lisboa     | 1234-567      | 19     | 123456789 | teste2@estg.ipleiria.pt |
      | Host C   | This is a short description host c | This is a detailed description | 200         | Test User  | Alcobaça   | 1234-567      | 19     | 123456789 | teste3@estg.ipleiria.pt |
      | Host D   | This is a short description host d | This is a detailed description | 200         | Test User  | Alcobaça   | 1234-567      | 19     | 123456789 | teste3@estg.ipleiria.pt |
      | Host E   | This is a short description host e | This is a detailed with float  | 18.9        | Test User  | Alcobaça   | 1234-567      | 19     | 123456789 | teste3@estg.ipleiria.pt |

  