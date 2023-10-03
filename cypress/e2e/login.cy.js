describe('LoginTOKS', () => {

  beforeEach(() => {
    // cy.visit('http://localhost:4200/');
    cy.visit('/');
  });
  
  it('logincorrecto', () => {
    //use of a custom command
    cy.login(true);
  });

  it('loginincorrecto', () => {
    cy.fixture('login').then((values) => {
      cy.get(values.elements.btnShowModalLogin).click();
      cy.get(values.elements.inputEmail).type(values.credentials.credential2.email);
      cy.get(values.elements.inputPassword).type(values.credentials.credential2.password);
      cy.get(values.elements.btnLogin).click();
      cy.get(values.elements.labelError).contains('Tu usuario y/o contraseña no son correctos, inténtalo de nuevo.');
    });
  });
  
})
