Feature: Login Page

    @login

    Scenario: Validating the login functionality
        Given I open the the application
        Then I enter the username
        Then I enter the password
        Then I click on login button


    @logout

    Scenario: Validating the logout functionality
        Given I open the the application
        Then I enter the username
        Then I enter the password
        Then I click on login button
        Given I click on dropdown
        Then  I click on Logout

    @changepassword

    Scenario: Validating the changepassword functionality
        Given I open the the application
        Then I enter the username
        Then I enter the password
        Then I click on login button
        Then I click on dropdown
        Then I click on changepassword
        Then I enter the currentpassword
        Then I enter the Newpassword
        When I enter the ConfirmNewpassword
        Then I click on save




