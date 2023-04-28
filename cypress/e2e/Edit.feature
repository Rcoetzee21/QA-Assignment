@edit @regression
Feature: QA Assignment Playground - Edit feature

    Background: Pre conditions
        Given I have navigated to the Overview page
        And I have registered a user

    Scenario: "Edit user first name"
        When I update the user with a valid first name of '<firstName>'
        Then The users first name should be updated correctly

        Examples:
            | firstName |
            | Updated   |

    Scenario Outline: Edit user last name
        When I update the user with a valid last name of '<lastName>'
        Then The users last name should be updated correctly

        Examples:
            | lastName        |
            | UpdatedLastName |
            | Updated1232     |

    Scenario Outline: Edit user email
        When I update the user with a valid email of '<email>'
        Then The users email should be updated correctly

        Examples:
            | email                      |
            | coetzeero3ss@gmail.com     |
            | cotzeeross@gmail.com       |
            | coetzeer3+ross@gmail.com   |
            | coetzeer3.ross@gmail.com   |
            | coetzeer3234ross@gmail.com |

    Scenario Outline: Edit user phone number
        When I update the user with a valid phone number of '<phoneNumber>'
        Then The users phone number should be updated correctly

        Examples:
            | phone        |
            | +31987654321 |
            | 31321456987  |






