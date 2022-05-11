Feature: Show house details page
  As a user
  I want to select a house form presented list
  So that I can see the house details in a single page with all the information
  Scenario: Show the selected house details
    Given I open the application
    And access to the landing page
    And search for houses
    When I see a list off houses
    And I select one and click
    Then I can see the house detail page
    And all the information provided for that house