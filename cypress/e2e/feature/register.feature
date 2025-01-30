Feature:  I want to login into the site with valid data

    Background:
        Given I navigate to the Website

    Scenario: Start a register and valid the register form
        When I entered valid email in the email input
        And I click on Create Account button
        Then I can see the full creation account form
        And I can see the input Title empty
        And I can see the inputs First name and Last name are empty
        And I can see the used email in the other email input
        And I can see the input password is empty
        And I can see the Date of birth empty
        And I can see the checkbox Newsletter unselected




