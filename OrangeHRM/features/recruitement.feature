Feature: Myrecruitement Page

    @myrecruitementpage
    Scenario: Validating the recruitement functionality

        Given I open the the application
        Then I enter the username
        Then I enter the password
        Then I click on login button
        Given I click on linkrecruitement
        Then I click candidates formlink
        Then I enter JobTitle name "QA Lead"
        Then I enter Jobvacancy name "Senior QA Lead"
        Then I enter Status name "Shortlisted"
        Then I enter candidatename "JohnHolder"
        Then I enter keywords field "Text"
        Then I enter Methodofapplication field "Online"
        Then I click on search
