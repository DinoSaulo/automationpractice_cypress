1. Feature: CodiLime contact form
  Scenario: Contact form is visible
    Given I am on a CodiLime page
      And Contact button is visible
    When I click a Contact button
    Then Contact form should be displayed