import locators from "../../fixtures/locators.json";

class RegisterPage {

    launchURL() {
        cy.visit(Cypress.env('baseURL'))
    }

    enterEmail(email) {
        cy.get(locators.REGISTER.EMAIL_INPUT).should('exist').type(email);
        return this;
    }

    clickOnCreateAccountButton() {
        cy.get(locators.REGISTER.CREATE_BTN).click();
        return this;
    }

    verifyRegisterFormVisibility() {
        cy.get(locators.REGISTER.FORM_CONTAINER).should('exist').should('be.visible');
        return this;
    }

    verifyPageTitle(title) {
        return cy.title().should("eq", title);
    }

    titleInputIsEmpty(){
        cy.get(locators.REGISTER.MR_CHECKBOX).should('not.be.checked') 
        cy.get(locators.REGISTER.MRS_CHECKBOX).should('not.be.checked') 
        return this;
    }

    firstNameInputIsEmpty(){
        cy.get(locators.REGISTER.FIRST_NAME_INPUT).should('exist').should('be.empty') 
        return this;
    }

    lastNameInputIsEmpty(){
        cy.get(locators.REGISTER.LAST_NAME_INPUT).should('exist').should('be.empty') 
        return this;
    }

    validateEmailFilledInEmailInput(email){
        cy.get(locators.REGISTER.EMAIL_FORM_INPUT).should('have.value', email)
        return this;
    }

    passwordInputIsEmpty(){
        cy.get(locators.REGISTER.PASSWORD_INPUT).should('exist').should('be.empty') 
        return this;
    }

    dateBirthInputIsEmpty(){
        cy.get(locators.REGISTER.DAY_BIRTH_INPUT).should('have.value', '')
        return this;
    }

    monthBirthInputIsEmpty(){
        cy.get(locators.REGISTER.MONTH_BIRTH_INPUT).should('have.value', '')
        return this;
    }

    yearBirthInputIsEmpty(){
        cy.get(locators.REGISTER.YEAR_BIRTH_INPUT).should('have.value', '')
        return this;
    }

    newsletterCheckboxIsUnselected(){
        cy.get(locators.REGISTER.NEWSLETTER_CHECKBOX).should('not.be.checked') 
        return this;
    }
}
export default RegisterPage;