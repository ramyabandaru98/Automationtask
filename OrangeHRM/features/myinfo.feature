Feature: Myinfo Page

   @myinfopage

   Scenario:Validating the myinfo functionality
      Given I open the the application
      Then I enter the username
      Then I enter the password
      Then I click on login button
      Given I click on my infolink
      Then I click on my personallink
      Then I enter Employeefullname "John"
      Then I enter Employeemiddlename "Holder"
      Then I enter Employeelastname "James"
      Then I enter Employeeid "2211580"
      Then I enter Otherid "4957589"
      Then I enter Nationality "Indian"
      Then I enter Martialstatus "Single"
      Then I click on savebutton 


   @customfield

   Scenario:Validating the mycustomefield
   Given I open the the application
      Then I enter the username
      Then I enter the password
      Then I click on login button
      Given I click on my infolink
      Then I click on my personallink
      Then I will enter blood type
      Then I will select Testtype

