import locators from "../../fixtures/locators.json";

class UserProfilePage {

    validateRegistrationMessage(successRegistrationMsg) {
        return cy.get(locators.USER_PROFILE.CONTAINER).contains(successRegistrationMsg);
    }

}

export default UserProfilePage;