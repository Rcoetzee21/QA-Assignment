@delete @regression
Feature: QA Assignment Playground - Delete feature

    Background: Pre conditions
        Given I have navigated to the Overview page
        And I have registered a user

    Scenario: Delete a user
        When I attempt to delete a user
        Then The user should be successfully deleted

    Scenario: Cancel user deletion
        When I cancel deleting a user
        Then I should be directed back to the Overview page






