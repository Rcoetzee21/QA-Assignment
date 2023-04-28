import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import RegistrationPage from "../../pageObjects/registrationPage";
import OverviewPage from "../../pageObjects/overviewPage";

before(function () {
  cy.fixture("user").then(function (user) {
    this.user = user;
  });
});

Given("I have navigated to the User Registration page", () => {
  cy.visit("registration");
});

var expectedFirstName;
var expectedLastName;
var expectedEmail;
When("I submit valid user registration data", (dataTable) => {
  const registrationPage = new RegistrationPage();

  dataTable.hashes().forEach((element) => {
    expectedFirstName = element.firstName;
    expectedLastName = element.lastName;
    expectedEmail = element.email;

    cy.submitUserRegistrationData(
      element.firstName,
      element.lastName,
      element.email,
      element.phoneNumber
    );
  });
});

Then("The new user should be registered successfully and appear in the users table on the Overview page",() => {
    const registrationPage = new RegistrationPage();
    const overviewPage = new OverviewPage();

    overviewPage.getUserTableDataValue(expectedFirstName).should("be.visible");
      overviewPage.getUserTableDataValue(expectedLastName).should("be.visible");
      overviewPage.getUserTableDataValue(expectedEmail).should("be.visible");
  }
);

When("I attempt to submit the registration form with an empty Name field", function () {
    cy.submitIncompleteUserRegistrationData("Name");
  }
);

When("I attempt to submit the registration form with an empty Phone field", function () {
    cy.submitIncompleteUserRegistrationData("Phone");
  }
);

When("I attempt to submit the registration form with an empty Surname field", function () {
    cy.submitIncompleteUserRegistrationData("Surname");
  }
);

Then("I should see the Required validation text next to the Surname field", function () {
    const registrationPage = new RegistrationPage();

    registrationPage.getInputRequiredValidationText("Surname").should("have.text", "Required");
  }
);

When("I attempt to submit the registration form with an empty Email field", function () {
    cy.submitIncompleteUserRegistrationData("Email");
  }
);
Then(
  "I should see the Required validation text next to the Email field",
  function () {
    const registrationPage = new RegistrationPage();

    registrationPage
      .getInputRequiredValidationText("Email")
      .should("have.text", "Required");
  }
);

When("I try to register with a first name of {string}", function (firstName) {
  cy.submitUserRegistrationData(
    firstName,
    this.user.lastName,
    this.user.email,
    this.user.phoneNumber
  );
});

When("I try to register with a last name of {string}", function (lastName) {
  cy.submitUserRegistrationData(
    this.user.firstName,
    lastName,
    this.user.email,
    this.user.phoneNumber
  );
});

When("I try to register with an email of {string}", function (email) {
  cy.submitUserRegistrationData(
    this.user.firstName,
    this.user.lastName,
    email,
    this.user.phoneNumber
  );
});

Then("I should see the Invalid email address validation text next to the Email field", function () {
    const registrationPage = new RegistrationPage();
    registrationPage.getInvalidEmailInputText().should("be.visible");
  }
);

When("I try to register with a phone number of {string}", function (phoneNumber) {
    cy.submitUserRegistrationData(
      this.user.firstName,
      this.user.lastName,
      this.user.email,
      phoneNumber
    );
  }
);

Then("I should not be able to register a new user", function () {
  const overviewPage = new OverviewPage();

  overviewPage.getUserTable().should("not.be.visible");
});
