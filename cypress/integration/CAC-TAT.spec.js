/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html');
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
        cy.get('#firstName').type('Adrieli');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('adrieli@gmail.com');
        cy.get('#phone').type('999999999');
        cy.get('#open-text-area').type(longText, {delay: 0});
        cy.contains('.button', 'Enviar').click();
        cy.get('.success').should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Adrieli');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('adrieli.gmail.com');
        cy.get('#phone').type('999999999');
        cy.get('#open-text-area').type('Teste');
        cy.contains('.button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
        cy.get('#phone').type('abc').should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Adrieli');
        cy.get('#lastName').type('Santos');
        cy.get('#email').type('adrieli@gmail.com');
        cy.get('#phone-checkbox').click();
        cy.get('#open-text-area').type('Teste');
        cy.contains('.button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type('Adrieli').should('have.value', 'Adrieli').clear().should('have.value', '');
        cy.get('#lastName').type('Santos').should('have.value', 'Santos').clear().should('have.value', '');
        cy.get('#email').type('adrieli@gmail.com').should('have.value', 'adrieli@gmail.com').clear().should('have.value', '');
        cy.get('#phone').type('999999999').should('have.value', '999999999').clear().should('have.value', '');
        cy.get('#open-text-area').type('Teste').should('have.value', 'Teste').clear().should('have.value', '');
        cy.contains('.button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.contains('.button', 'Enviar').click();
        cy.get('.error').should('be.visible');
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsAndSubmit('Adrieli', 'Santos', 'adrieli@gmail.com', '999999999', 'Teste');
        cy.get('.success').should('be.visible');
    })

    it.only('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product').select('YouTube').should('have.value', 'youtube')
    })

    it.only('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product').select('mentoria').should('have.value', 'mentoria')
    })

    it.only('seleciona um produto (Blog) por seu índice', function() {
        cy.get('#product').select(1).should('have.value', 'blog')
    })
  })