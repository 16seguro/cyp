Feature: Login Feature

    Feature This feature is required for a user to log in.

Scenario: Success Login
Given a user opens the login page
When a user enters the username "standard_user"
And a user enters the password "secret_sauce"
And a user clicks on the login button
Then the user will be logged in
#Open Cypress | Set "@focus"
Scenario: Failed Login
Given a user opens the login page
When a user enters the username "locked_out_user"
And a user enters the password "secret_sauce"
And a user clicks on the login button
Then the user will be receiving a failed message    
