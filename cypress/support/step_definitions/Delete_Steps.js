import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import OverviewPage from "../../pageObjects/overviewPage";

before(function () {
  cy.fixture("user").then(function (user) {
    this.user = user;
  });
});

Given("I have navigated to the Overview page", () => {
  cy.visit("qa-sandbox-spa");
});

Given("I have registered a user", function () {
  const overviewPage = new OverviewPage();

  overviewPage.getNavLink("New registration").click();
  cy.submitUserRegistrationData(
    this.user.firstName,
    this.user.lastName,
    this.user.email,
    this.user.phoneNumber
  );
});

When("I attempt to delete a user", function () {
  const overviewPage = new OverviewPage();

  overviewPage.getDeleteButton().click();
  overviewPage.getConfirmationDialogOption("Yes").click();
});

Then("The user should be successfully deleted", function()  {
  const overviewPage = new OverviewPage();

  overviewPage.getNoRegistrationAvailableText().should("be.visible")
});

When("I cancel deleting a user", () => {
  const overviewPage = new OverviewPage();

  overviewPage.getDeleteButton().click();
  overviewPage.getConfirmationDialogOption("No").click();
});

Then("I should be directed back to the Overview page", function () {
  const overviewPage = new OverviewPage();

  overviewPage.getUserTableDataValue(this.user.firstName).should("be.visible");
  overviewPage.getUserTableDataValue(this.user.lastName).should("be.visible");
  overviewPage.getUserTableDataValue(this.user.email).should("be.visible");
});
