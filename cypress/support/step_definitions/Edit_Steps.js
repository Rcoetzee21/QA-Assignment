import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import OverviewPage from "../../pageObjects/overviewPage";
import RegistrationPage from "../../pageObjects/registrationPage";

var expectedFirstName;
When("I update the user with a valid first name of {string}", (firstName) => {
  expectedFirstName = firstName;

  cy.updateUser("Name", firstName);
});

Then("The users first name should be updated correctly", () => {
  const overviewPage = new OverviewPage();

  overviewPage.getUserTableDataValue(expectedFirstName).should("be.visible");
});

var expectedLastName;
When("I update the user with a valid last name of {string}", function (lastName) {
    expectedLastName = lastName;

    cy.updateUser("Surname", lastName);
  }
);

Then("The users last name should be updated correctly", function () {
  const overviewPage = new OverviewPage();

  overviewPage.getUserTableDataValue(expectedLastName).should("be.visible");
});

var expectedUpdatedEmail;
When("I update the user with a valid email of {string}", function (email) {
  expectedUpdatedEmail = email;

  cy.updateUser("Email", email);
});

Then("The users email should be updated correctly", function () {
  const overviewPage = new OverviewPage();

  overviewPage.getUserTableDataValue(expectedUpdatedEmail).should("be.visible");
});

var expectedPhoneNumber;
When("I update the user with a valid phone number of {string}", function (phoneNumber) {
    expectedUpdatedEmail = phoneNumber;

    cy.updateUser("Phone", phoneNumber);
  }
);

Then("The users phone number should be updated correctly", function () {
  const overviewPage = new OverviewPage();
  const registrationPage = new RegistrationPage();

  overviewPage.getEditButton().click();
  registrationPage.getPhoneNumberInput().should("have.value", expectedUpdatedEmail);
});
