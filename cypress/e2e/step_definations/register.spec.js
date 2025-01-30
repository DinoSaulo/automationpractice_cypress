import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import RegisterPage from "../pages/registerPage";
const registerpage = new RegisterPage();

before(()=>{
  cy.fixture('usersData').then(function (data) {
    globalThis.data = data;
  })
})  

Given('I navigate to the Website',()=>{
  registerpage.launchURL()
})

When('I entered valid email in the email input',  () => {
  registerpage.enterEmail(data.email)
})

When('I click on Create Account button', () => {
  registerpage.clickOnCreateAccountButton()
})

Then('I can see the full creation account form', () => {
  registerpage.verifyRegisterFormVisibility()
})

Then('I can see the input Title empty', () => {
  registerpage.titleInputIsEmpty()
})

Then('I can see the inputs First name and Last name are empty', () => {
  registerpage.firstNameInputIsEmpty()
  registerpage.lastNameInputIsEmpty()
})

Then('I can see the used email in the other email input', () => {
  registerpage.validateEmailFilledInEmailInput(data.email)
})

Then('I can see the input password is empty', () => {
  registerpage.passwordInputIsEmpty()
})

Then('I can see the Date of birth empty', () => {
  registerpage.dateBirthInputIsEmpty()
  registerpage.monthBirthInputIsEmpty()
  registerpage.yearBirthInputIsEmpty()
})

Then('I can see the checkbox Newsletter unselected', () => {
  registerpage.newsletterCheckboxIsUnselected()
})