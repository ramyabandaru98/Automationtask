Feature: Double Click Copy Text Validation
  @doubleclick
  Scenario: Validate double click copy functionality

    Given I open test automation page
    When I enter value in Field1 "Automation Testing"
    And I double click on Copy Text button
    Then I validate both fields using assertion
    And I validate both fields using if condition