import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import RegisterPage from "../pages/registerPage";
import UserProfilePage from "../pages/userProfilePage";
const registerpage = new RegisterPage();
const userProfilepage = new UserProfilePage();

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

When('I entered invalid email in the email input',  () => {
  registerpage.enterEmail(data.invalidEmail)
})

When('I click on Create Account button', () => {
  registerpage.clickOnCreateAccountButton()
})

Then('I can see the invalid email message', () => {
  registerpage.validateInvalidEmailMessage()
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

Given('I have a valid user data', (table) => {
  const userRawData = table.raw()[1]
  globalThis.userData = {
    "First_name": userRawData[0],
    "Last_name": userRawData[1],
    "Title": userRawData[2],
    "Email": userRawData[3],
    "Password": userRawData[4],
    "Birth_date": userRawData[5],
    "Newsletter": userRawData[6],
  }
  global.validUser = true
})

When('I fill user email in the email input', () => {
  registerpage.enterEmail(userData.Email)
})

When('I fill the form with the data of user', () => {
  registerpage.fillRegisterForm(userData)
})

Then('I click on Register button', () => {
  registerpage.clickOnRegisterButton(validUser)
})

Then('I see the success registration message', () => {
  userProfilepage.validateRegistrationMessage(data.successRegistrationMsg)
})