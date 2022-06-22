  Feature: Become a host webpage
  As a user
  I want to become a host
  So that I can see survey with list of fields to be filled in and after submit to become a host

  Scenario Outline: Fill become a host webpage with incorrect values
    Given I can open the application
    And access to the landing page
    And I click on become a host option
    And I will see the become a host form
    When I fill hostname as '<HostName>' and ShortDescriptionType as '<ShortDescriptionType>' and DetailedDescription as '<DetailedDescription>' and Priceperday as '<Priceperday>' and MemberName as '<MemberName>' and MemberCity as '<MemberCity>' and MemberZipCode as '<MemberZipCode>' and Number as '<Number>' and TaxNumber as '<TaxNumber>' and EmailAddress as '<EmailAddress>' and ErrorAttribute as '<ErrorAttribute>'
    And I click "submit button"
    Then I can see the '<ErrorAttribute>' with error '<ExpectedError>'
    And I can see the same page

    Examples: 
    | HostName   | ShortDescriptionType                 | DetailedDescription                                        | Priceperday      | MemberName  | MemberCity            | MemberZipCode             | Number    | TaxNumber  | EmailAddress            |  ExpectedError                         | ErrorAttribute        |
    | Host A     | this is a short description host a   | this is a detailed description                             | 320              | Test User   | Leiria                | [blank]                   | 19        | 123456789  | teste1@estg.ipleiria.pt |  Member zip code is required!          | MemberZipCode         |
    | [blank]    | this is host without name            | this is a detailed description for hostname without value  | 300              | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | teste2@estg.ipleiria.pt |  Host name is required!                | HostName              |
    | Host B     | this is host without price per day   | this is a detailed description for hostname without value  | 0                | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | teste3@estg.ipleiria.pt |  Price per day is required!            | PricePerDay           |
    | Host C     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | 19        | [blank]    | teste4@estg.ipleiria.pt |  Tax number required!                  | TaxNumber             |
    | Host D     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | [blank]               | 1234-123                  | 19        | 123456789  | teste5@estg.ipleiria.pt |  Member city is required!              | MemberCity            |
    | Host E     | [blank]                              | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | teste5@estg.ipleiria.pt |  Detailed description type is required!| ShortDescriptionType  |
    | Host F     | this is host without price per day   | [blank]                                                    | 180              | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | teste5@estg.ipleiria.pt |  Detailed description is required!     | DetailedDescription   |
    | Host G     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | [blank]     | Leiria                | 1234-123                  | 19        | 123456789  | teste5@estg.ipleiria.pt |  Member Name is required!              | MemberName            |
    | Host H     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | [blank]   | 123456789  | teste5@estg.ipleiria.pt |  Number is required!                   | Number                |
    | Host I     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | [blank]                 |  Member email address is equired!      | MemberEmailAddress    |

    #region with different values

    | Host J     | t                                    | this is a detailed description                             | 320              | Test User   | Leiria                | 1234-123                  | 19        | 123456789  | teste1@estg.ipleiria.pt |  Short description type must be 2 character or more!       | ShortDescriptionType  |
    | Host K     | this is host name                    | t                                                          | 300              | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | teste2@estg.ipleiria.pt |  Detailed description must be 2 character or more!         | DetailedDescription   |
    | Host L     | this is host without price per day   | this is a detailed description for hostname without value  | A                | Teste User  | Leiria                | 1234-123                  | 19        | 123456789  | teste3@estg.ipleiria.pt |  Price per day should be a number                          | PricePerDay           |
    | Host M     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | t           | Leiria                | 1234-123                  | 19        | 123456789  | teste4@estg.ipleiria.pt |  Member Name must be 2 character or more!                  | MemberName            |
    | Host O     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | L                     | 1234-123                  | 19        | 123456789  | teste5@estg.ipleiria.pt |  Member city must be 2 character or more!                  | MemberCity            |
    | Host P     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1                         | 19        | 123456789  | teste5@estg.ipleiria.pt |  Member zip code must be 2 character or more!              | MemberZipCode         |
    | Host Q     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | 1         | 123456789  | teste5@estg.ipleiria.pt |  Number must be 2 character or more!                       | Number                |
    | Host R     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | 19        | 1          | teste5@estg.ipleiria.pt |  Tax number must be 2 character or more!                   | TaxNumber             |
    | Host S     | this is host without price per day   | this is a detailed description for hostname without value  | 180              | Teste User  | Leiria                | 1234-123                  | 1234-123  | 123456789  | Teste                   |  MemberEmailAddress should be an email address             | MemberEmailAddress    |

