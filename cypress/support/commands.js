// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (isLogin) => {
  //use of fixture 'login' for value selection
  cy.fixture('login').then((values) => {
    const elements = values.elements;

    const {email, password} = isLogin 
      ? values.credentials.credential1
      : values.credentials.credential2;

    cy.get(elements.btnShowModalLogin).click();
    cy.get(elements.inputEmail).type(email);
    cy.get(elements.inputPassword).type(password);
    cy.get(elements.btnLogin).click();
    
    if(isLogin){
      cy.get('.overview-wrapper > app-dashboard-member-overview > .d-none > .titleName > strong', { timeout: 20000 }).contains('Automatizacion Cypress');
      cy.get(elements.btnLogout).click();
      cy.get('.welcome-message > label > strong', {timeout: 10000}).contains('¡Bienvenido!');
    } else {
      cy.get(elements.labelError, { timeout: 10000 }).contains(values.messages.msg1);
    }
  });
});

Cypress.Commands.add('registerShowErrors',() => {
  cy.fixture('register').then(values => {
    const inputs = values.elements.inputs;  
    const errors = values.elements.errors; 
    
    //Selected inputs
    cy.get(inputs.name).click();
    cy.get(inputs.lastName).click();
    cy.get(inputs.secondLastName).click();
    cy.get(inputs.dateBirth).click();
    cy.get(inputs.lada).click();
    cy.get('.cdk-overlay-backdrop').click();
    cy.get(inputs.phoneNumber).click();
    cy.get(inputs.email).click();
    cy.get(inputs.passwd).click();
    cy.get(inputs.passwd2).click();
    cy.get(inputs.promotions).click();
    cy.get(inputs.btnNextDisabled).should('not.be.disabled');

    //Show Errors
    cy.get(errors.name[0]).contains(errors.name[1]);
    cy.get(errors.lastName[0]).contains(errors.lastName[1]);
    cy.get(errors.secondLastName[0]).contains(errors.secondLastName[1]);
    cy.get(errors.dateBirth[0]).contains(errors.dateBirth[1]);
    cy.get(errors.lada[0]).contains(errors.lada[1]);
    cy.get(errors.phoneNumber[0]).contains(errors.phoneNumber[1]);
    cy.get(errors.email[0]).contains(errors.email[1]);
    cy.get(errors.passwd[0]).contains(errors.passwd[1]);
    cy.get(errors.passwd2[0]).contains(errors.passwd2[1]);
    cy.get(errors.terms[0]).contains(errors.terms[1]);
  })
})