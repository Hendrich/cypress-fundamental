Feature: Login to Application
         As a valid user
         I want to login into Application

Scenario: Valid login
Given I open the website
When I submit login
Then I should see homepage