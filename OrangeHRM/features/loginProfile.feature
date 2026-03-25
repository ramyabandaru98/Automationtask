Feature: User login, change password and logout

    @orangehrmlogin
    Scenario Outline: Login and change password and logout
        Given User opens application "<url>"
        When User logs in with username "<username>" and password "<password>"
        And User changes password from "<currentPwd>" to "<newPwd>" and confirms "<confirmPwd>"
        Then User logs out

        Examples:

            | url                                                                | username | password | currentPwd | newPwd | confirmPwd |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | admin123 | admin123 | pass123    | new123 | new123     |
            | https://opensource-demo.orangehrmlive.com/web/index.php/auth/login | user2    | pwd456   | pwd456     | pwd789 | pwd789     |