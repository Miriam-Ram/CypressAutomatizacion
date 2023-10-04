describe('LoginTOKS', () => {
  it('logincorrecto', () => {
    cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.login-button > .mat-button-wrapper').click()
    cy.get('#mat-input-0').type('wiks@yutep.com')
    cy.get('#mat-input-1').type('Hola1234')
    cy.get('.registre-button > .mat-focus-indicator').click()
    cy.get(':nth-child(2) > .logout-button').click()

  })

  /*
  it('loginincorrecto', () => {
    cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.login-button > .mat-button-wrapper').click()
    cy.get('#mat-input-0').type('nosins@vixej.com')
    cy.get('#mat-input-1').type('Hola12345')
    cy.get('.registre-button > .mat-focus-indicator').click()
  })
  */
  
})
