Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function(firtsName, lastName, email, phone, textArea) {
    cy.get('#firstName').type(firtsName);
        cy.get('#lastName').type(lastName);
        cy.get('#email').type(email);
        cy.get('#phone').type(phone);
        cy.get('#open-text-area').type(textArea);
        cy.get('.button[type="submit"]').click();
})