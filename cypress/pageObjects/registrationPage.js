class RegistrationPage{

    getFirstNameInput(){
        return cy.get("#name");
    }

    getLastNameInput(){
        return cy.get("#surname");
    }

    getEmailInput(){
        return cy.get("#email");
    }

    getPhoneNumberInput(){
        return cy.get("#phone");
    }

    getSubmitButton(){
        return cy.get('button').contains('Submit');
    }


    getInputRequiredValidationText(inputName){

        switch (inputName) {
            case "Surname":
                return cy.get(':nth-child(2) > .input__validation');
                break;
            case "Email":
                return cy.get(':nth-child(3) > .input__validation');
                break;
            default:
                break;
        }
        return cy.get(':nth-child(2) > .input__validation');
    }

    getInvalidEmailInputText(){
        return cy.get('p').contains("Invalid email address");
    }

    
}
export default RegistrationPage
