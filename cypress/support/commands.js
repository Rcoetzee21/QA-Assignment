import RegistrationPage from "../pageObjects/registrationPage";
import OverviewPage from "../pageObjects/overviewPage";

Cypress.Commands.add(
  "submitUserRegistrationData",
  (firstName, lastName, email, phoneNumber) => {
    const registrationPage = new RegistrationPage();

    registrationPage.getFirstNameInput().type(firstName);
    registrationPage.getLastNameInput().type(lastName);
    registrationPage.getEmailInput().type(email);
    registrationPage.getPhoneNumberInput().type(phoneNumber);
    registrationPage.getSubmitButton().click();
  }
);

Cypress.Commands.add(
  "submitIncompleteUserRegistrationData",
  (ommittedField) => {
    const registrationPage = new RegistrationPage();

    switch (ommittedField) {
      case "Name":
        cy.fixture("user").then((user) => {
          registrationPage.getLastNameInput().type(user.lastName);
          registrationPage.getEmailInput().type(user.email);
          registrationPage.getPhoneNumberInput().type(user.phoneNumber);
          registrationPage.getSubmitButton().click();
        });
        break;
      case "Surname":
        cy.fixture("user").then((user) => {
          registrationPage.getFirstNameInput().type(user.firstName);
          registrationPage.getEmailInput().type(user.email);
          registrationPage.getPhoneNumberInput().type(user.phoneNumber);
          registrationPage.getSubmitButton().click();
        });
        break;
      case "Email":
        cy.fixture("user").then((user) => {
          registrationPage.getFirstNameInput().type(user.firstName);
          registrationPage.getLastNameInput().type(user.lastName);
          registrationPage.getPhoneNumberInput().type(user.phoneNumber);
          registrationPage.getSubmitButton().click();
        });
        break;
      case "Phone":
        cy.fixture("user").then((user) => {
          registrationPage.getFirstNameInput().type(user.firstName);
          registrationPage.getLastNameInput().type(user.lastName);
          registrationPage.getEmailInput().type(user.email);
          registrationPage.getSubmitButton().click();
        });
        break;
      default:
        break;
    }
  }
);

Cypress.Commands.add("updateUser", (userProperty, newValue) => {
  const overviewPage = new OverviewPage();
  const registrationPage = new RegistrationPage();
  switch (userProperty) {
    case "Name":
      overviewPage.getEditButton().click();
      registrationPage.getFirstNameInput().clear().type(newValue);
      registrationPage.getSubmitButton().click();
      break;
    case "Surname":
      overviewPage.getEditButton().click();
      registrationPage.getLastNameInput().clear().type(newValue);
      registrationPage.getSubmitButton().click();
      break;
    case "Email":
      overviewPage.getEditButton().click();
      registrationPage.getEmailInput().clear().type(newValue);
      registrationPage.getSubmitButton().click();
      break;
    case "Phone":
      overviewPage.getEditButton().click();
      registrationPage.getPhoneNumberInput().clear().type(newValue);
      registrationPage.getSubmitButton().click();
    default:
      break;
  }
});
