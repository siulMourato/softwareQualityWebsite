Feature: Show house details page
  As a user
  I want to select a house form presented list
  So that I can see the house details in a single page with all the information

  Scenario Outline: Show the selected house details
    Given I can open the application
    And access to the landing page
    And search '<Search>' for houses for today
    When I see a list off houses
    And  I select '<House>' and click
    Then I can see right page '<House>' opened
    And  I can see that the URL contains '<Search>'
    And  I can see short description '<ShortDescriptionType>'
    And  I can see detailed description '<DetailedDescription>'
    And  I can see Price is '<Priceperday>'
    And  I can see button "Reserve"


    Examples:
      | Search  | House                               | ShortDescriptionType                | DetailedDescription                                                                    | Priceperday |
      | London  | London_Studio_Apartments            | London Studio Apartments            | 4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine             | 35          |
      | Leiria  | Independant_luxury_studio_apartment | Independant luxury studio apartment | 2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen                     | 40          |
      | Abudabi | Spacious_Peaceful_Modern_Bedroom    | Spacious Peaceful Modern Bedroom    | 3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning | 60          |

#validar retorna de 7 items
#validar que têm o preço
#validar que têm votação
#validar que têm o like disponivel 
#validar que têm descriçao e titulo
#depois de clicar
#veficar que o item tem foto que o descritivo corresponde e que tem o botão reserve now
#validar o url


