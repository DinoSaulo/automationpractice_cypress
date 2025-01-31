Feature:  I want to register a new user

    Background:
        Given I navigate to the Website

    Scenario: Start a register with an invalid email
        When I entered invalid email in the email input
        And I click on Create Account button
        Then I can see the invalid email message

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


    Scenario: New user registration
        Given I have a valid user data
            | First_name    | Last_name | Title | Email                     | Password  | Birth_date     | Newsletter|
            | Saulo         | Barros    | Mr    | contrata.ele{0}@email.com | pw123@    | 18 May 2000    | true      |
        When I fill user email in the email input
        And I click on Create Account button
        And I fill the form with the data of user
        And I click on Register button
        Then I see the success registration message


