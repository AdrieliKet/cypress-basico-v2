/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html');
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
        cy.get('#firstName').type('Adrieli');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('adrieli@gmail.com');
        cy.get('#phone').type('999999999');
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('.button[type="submit"]').click();
        cy.get('.success').should('be.visible');
    })
  })