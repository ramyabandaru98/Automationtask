Feature: Myclaim Page

    @myclaimpage
    Scenario: Validating the claim functionality
        Given I open the the application
        Then I enter the username
        Then I enter the password
        Then I click on login button
        Given I click on claim link
        Then I click on assign claim link
        Then I click on Employeename "Joy  Smith"
        Then I click on remarks "No"
        Then I click on create