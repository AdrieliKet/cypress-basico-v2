Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function(firtsName, lastName, email, phone, textArea) {
    cy.get('#firstName').type(firtsName, { log: false });
        cy.get('#lastName').type(lastName, { log: false });
        cy.get('#email').type(email, { log: false });
        cy.get('#phone').type(phone, { log: false });
        cy.get('#open-text-area').type(textArea, { log: false });
        cy.get('.button[type="submit"]').click();
})