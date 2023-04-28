@registration @regression
Feature: QA Assignment Playground - Registration feature

    Background: Pre conditions
        Given I have navigated to the User Registration page


    Scenario Outline: Register a valid user
        When I submit valid user registration data
            | firstName   | lastName   | email   | phoneNumber   |
            | <firstName> | <lastName> | <email> | <phoneNumber> |
        Then The new user should be registered successfully and appear in the users table on the Overview page

        Examples:
            | firstName | lastName   | email                      | phoneNumber  |
            | Ross      | Coetzee    | coetzeeross@gmail.com      | +31687271442 |
            | Rosss     | Coetzee123 | coetzeer2oss@gmail.com     | +31687271442 |
            | Ross      | Coetzee123 | coetzeer3+ross@gmail.com   | +31687271442 |
            | Ross      | Coetzee123 | coetzeer3.ross@gmail.com   | 31687271442  |
            | Ross      | Coetzee123 | coetzeer3234ross@gmail.com | 31687271442  |



    Scenario: The Name field should be optional
        When I attempt to submit the registration form with an empty Name field
        Then The new user should be registered successfully and appear in the users table on the Overview page

    Scenario: The Phone field should be optional
        When I attempt to submit the registration form with an empty Phone field
        Then The new user should be registered successfully and appear in the users table on the Overview page

    Scenario: The Surname field should be mandatory
        When I attempt to submit the registration form with an empty Surname field
        Then I should see the Required validation text next to the Surname field

    Scenario: The Email field should be mandatory
        When I attempt to submit the registration form with an empty Email field
        Then I should see the Required validation text next to the Email field

    Scenario Outline: Incorrectly structured first name values should not be accepted
        When I try to register with a first name of '<firstName>'
        Then I should not be able to register a new user

        Examples:
            | firstName |
            | 123       |
            | Ros32     |
            | R#@90     |
            | Ro sd     |
            | Ro.sd     |

    Scenario Outline: Incorrectly structured last name values should not be accepted
        When I try to register with a last name of '<lastName>'
        Then I should not be able to register a new user

        Examples:
            | lastName |
            | $^%$#$#  |
            | dsf^*1   |
            | Ryu gh   |
            | dfs.f    |

    Scenario Outline: Incorrectly structured email values should not be accepted
        When I try to register with an email of '<email>'
        Then I should see the Invalid email address validation text next to the Email field

        Examples:
            | email                         |
            | plainaddress                  |
            | #@%^%#$@#$@#.com              |
            | @example.com                  |
            | Joe Smith <email@example.com> |
            | email.example.com             |
            | email@example@example.com     |
            | .email@example.com            |
            | email.@example.com            |
            | email..email@example.com      |
            | email@example.com (Joe Smith) |
            | email@example                 |
            | email@-example.com            |
            | email@111.222.333.44444       |
            | email@example..com            |
            | Abc..123@example.com          |

    Scenario Outline: Incorrectly structured phone number values should not be accepted
        When I try to register with a phone number of '<phoneNumber>'
        Then I should not be able to register a new user

        Examples:
            | phoneNumber        |
            | asdsad             |
            | adass23432         |
            | +234fsdf#$         |
            | +                  |
            | +3242-332324-23432 |
            | +7878 7878 7878    |

