Cypress.Commands.add('capitalizeFirstLetter', (str) => {
    return str[0].toUpperCase() + str.slice(1);
})