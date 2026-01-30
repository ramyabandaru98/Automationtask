Feature: Mycontactdetails Page


    @mycontactdetailsinpersonal
    Scenario:Validating the mycontact functionality
        Given I open the the application
        Then I enter the username
        Then I enter the password
        Then I click on login button
        Given I click on my infolink
        Given I click on contactdetails
        Then I enter street1"Sriram Residency"
        Then I enter street2"maktha"
        Then I enter cityname"VIZIANAGARAM"
        Then I enter statename"AndhraPradesh"
        Then I enter zipcode"535004"
        Then I enter countryname"India"
        Then I enter homephonenumber"8791234671"
        Then I enter mobilephonenumber"8790699789"
        Then I enter work phonenumber"112-898-7612"
        Then I enter work emailaddress "John@example.com"
        Then I enter other emailaddress "Smith@example.com"
        Then I click on savebutton
        Then I click on my personallink
        Then I enter Employeefullname "James"
        Then I enter Employeemiddlename "Holly"
        Then I enter Employeelastname "Ben"
        Then I enter Employeeid "2211500"
        Then I enter Otherid "4957509"
        Then I enter Nationality "Indian"
        Then I enter Martialstatus "Single"
        Then I click on savebutton
        Then I will enter bloodtype "A+"
        Then I will select Testtype "Blood"
        Then I click on savebutton on customfileld


