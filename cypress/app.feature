Feature: Recipe Management Application

  As a user of the Recipe Management Application,
  I want to be able to register, login, manage my profile, and interact with recipes,
  So that I can easily manage and share my favorite recipes.

  Background:
    Given the user is on the login page

  Scenario: Successful user registration
    When the user navigates to the registration page
    And the user fills in the registration form with valid details
    And the user submits the registration form
    Then the user should be redirected to the login page
    And the user should see a confirmation message "Registration successful"

  Scenario: Successful user login
    Given the user is on the login page
    When the user enters valid login credentials
    And the user submits the login form
    Then the user should be redirected to the Feed page
    And the user should see their username displayed in the header

  Scenario: View and interact with recipes
    Given the user is logged in
    When the user navigates to the Feed page
    Then the user should see a list of recipes
    When the user clicks on a recipe
    Then the user should be redirected to the Recipe page
    And the user should see the recipe details

  Scenario: Add a new recipe
    Given the user is logged in
    When the user navigates to the "Add Recipe" page
    And the user fills in the recipe details
    And the user submits the form
    Then the user should see a confirmation message "Recipe added successfully"
    And the new recipe should appear in "My Recipes" feed

  Scenario: Edit user profile
    Given the user is logged in
    When the user navigates to the Profile page
    And the user clicks on "Edit Profile"
    And the user updates their profile information
    And the user submits the changes
    Then the user should see a confirmation message "Profile updated successfully"
    And the updated information should be displayed on the Profile page

  Scenario: View favorite recipes
    Given the user is logged in
    When the user navigates to the Favorites page
    Then the user should see a list of their favorite recipes

  Scenario: Logout
    Given the user is logged in
    When the user clicks on the "Logout" button in the header
    Then the user should be redirected to the login page
    And the user should see a message "You have been logged out"
