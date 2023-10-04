
describe('Registro', () => {

beforeEach(function(){
  cy.visit('https://plcomer.toksopc.grupotoks.com.mx')

})

  it('ejemplo', () => {
    cy.visit('/register#/register');
    cy.registerShowErrors();
  })

  it('passes', () => {
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
    //cy.get('.mat-form-field-suffix').click()
    //cy.get('.mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('#mat-input-5').type('01/01/2000')
    // cy.get('.mat-calendar-previous-button')
    cy.get('#mat-input-6').type('2261076150')
    cy.get('#mat-input-7').type('wruyy@yutep.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('#mat-mdc-checkbox-1-input').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .btn-next > .mdc-button__label').click()
    // cy.wait(5000)
    cy.task("getNipRegistro", 'SELECT Nip FROM RegisterNip WHERE PhoneNumber ="522261076150" ORDER BY CreationDate DESC limit 1')
    .then((result) =>{
      cy.get('#mat-input-23').click()
      cy.get('#mat-input-23').type(result[0])
      cy.get('#mat-input-24').type(result[1])
      cy.get('#mat-input-25').type(result[2])
      cy.get('#mat-input-26').type(result[3])
    })

    // cy.get('.apply-button > .mat-mdc-button-touch-target')
  })
 
  //Obligatoridad de datos
  /*
  it('passes', () => {
    //cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
    
    cy.get('#mat-input-5').type('01/01/2000')
    cy.get('#mat-input-6').type('54720')
    cy.get('#mat-input-7').click()
    cy.wait(5000)
    cy.get('#mat-input-7').type('mr@gmail.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
    cy.get('#mat-input-10').click()
    cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
    cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
  })
*/
  /*
  //Registro de referido
  it('passes', () => {
    //cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Referidouno')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Referido')
    cy.get('#mat-input-5').type('02/01/2000')
    cy.get('#mat-input-6').type('55600')
    cy.get('#mat-input-7').click()
    cy.wait(5000)
    cy.get('#mat-input-7').type('mareferido@automatizado.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
    //numero de telefono
    //cy.get('#mat-input-10').type('5567988777')
   // cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
    cy.get('#mat-input-11').type('0000412243')
    cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
    
  })

 
*//*
  //Referido invalido

 it('passes', () => {
  //cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
  cy.get('.red-button').click()
  cy.get('#mat-input-2').type('Referidouno')
  cy.get('#mat-input-3').type('Garay')
  cy.get('#mat-input-4').type('Referido')
  cy.get('#mat-input-5').type('02/01/2000')
  cy.get('#mat-input-6').type('55600')
  cy.get('#mat-input-7').click()
  cy.wait(5000)
  cy.get('#mat-input-7').type('mrreferido@automatizado.com')
  cy.get('#mat-input-8').type('Hola1234')
  cy.get('#mat-input-9').type('Hola1234')
  cy.get('.mat-checkbox-inner-container').click()
  cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
  //numero de telefono
  //cy.get('#mat-input-10').type('5567988777')
 // cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
  cy.get('#mat-input-11').type('0000412')
  cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
  cy.get('#mat-error-13 > .ng-star-inserted').should('have.text','Lo sentimos, este código no es válido. Verifica nuevamente')

})

//usuario ya registrado 
/*
it('passes', () => {
  //cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
  cy.get('.red-button').click()
  cy.get('#mat-input-2').type('Yaregistrado')
  cy.get('#mat-input-3').type('Garay')
  cy.get('#mat-input-4').type('Referido')
  cy.get('#mat-input-5').type('03/01/2000')
  cy.get('#mat-input-6').type('55600')
  cy.get('#mat-input-7').click()
  cy.wait(5000)
  cy.get('#mat-input-7').type('miriamgaraym@gmail.com')
  cy.get('#mat-input-8').type('Hola1234')
  cy.get('#mat-input-9').type('Hola1234')
  cy.get('.mat-checkbox-inner-container').click()
  cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
  //numero de telefono
  //cy.get('#mat-input-10').type('5567988777')
 // cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
 //numero de referido
  //cy.get('#mat-input-11').type('')
  cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
  cy.get('.mat-snack-bar-container')
  //cy.get('.mat-snack-bar-container').should('have.text','Usuario ya registrado')
  //cy.get('#mat-error-13 > .ng-star-inserted').should('have.text','Lo sentimos, este código no es válido. Verifica nuevamente')
  cy.get('.mat-simple-snackbar-action > .mat-focus-indicator > .mat-button-wrapper').click()

})


*/
  //Codigo postal

/*
  it('passes', () => {
    cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
    //cy.get('.mat-form-field-suffix').click()
    //cy.get('.mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('#mat-input-5').type('01/01/2000')
    //cy.get('.mat-calendar-previous-button')
    cy.get('#mat-input-6').type('54720')
    cy.get('#mat-input-7').click()
    cy.wait(5000)
    cy.get('#mat-input-7').type('mmg@gmail.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
    //numero de telefono
    cy.get('#mat-input-10').type('5567988777')
    cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
    cy.get('#mat-input-11').type('0000412243')
    cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
  })
*/
   //CP No valido

/*
   it('passes', () => {
    cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
    cy.get('#mat-input-5').type('01/01/2000')
    cy.get('#mat-input-6').type('5')
    cy.wait(5000)
    cy.get('#mat-input-7').click()
   // cy.wait(5000)
    //cy.get('#mat-error-6').should('have.text','El código postal no es válido.')
    
    //cy.get('[data-layer="Content"]').should('have.text','El código postal no es válido.')
   cy.get('#mat-error-6 > .ng-star-inserted').should('have.text','El código postal no es válido.')
    
  })

/*
  //Registro de tarjeta
  it('passes', () => {
    cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
    //cy.get('.mat-form-field-suffix').click()
    //cy.get('.mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('#mat-input-5').type('01/01/2000')
    //cy.get('.mat-calendar-previous-button')
    cy.get('#mat-input-6').type('54720')
    cy.get('#mat-input-7').click()
    cy.wait(5000)
    cy.get('#mat-input-7').type('autenticacion@gmail.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
    //numero de telefono
    cy.get('#mat-input-10').type('5567988777')
    //cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
    //cy.get('#mat-input-11').type('0000412243')
    cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
  })

/*
  //Miembro corporativo
  it('passes', () => {
    cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
    //cy.get('.mat-form-field-suffix').click()
    //cy.get('.mat-datepicker-toggle > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('#mat-input-5').type('01/01/2000')
    //cy.get('.mat-calendar-previous-button')
    cy.get('#mat-input-6').type('54720')
    cy.get('#mat-input-7').click()
    cy.wait(5000)
    cy.get('#mat-input-7').type('mr@gmail.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
    //numero de telefono
    cy.get('#mat-input-10').type('5567988777')
    cy.get('#mat-button-toggle-2-button > .mat-button-toggle-label-content').click()
    cy.get('#mat-input-11').type('0000412243')
    cy.get('.ng-invalid > :nth-child(1) > .flex-container > .btn-register > .mat-focus-indicator').click()
  })
  */

  //Número teléfono
  /*
  it('passes', () => {
    //cy.visit('https://plcomer.toksopc.grupotoks.com.mx')
    cy.get('.red-button').click()
    cy.get('#mat-input-2').type('Miriam')
    cy.get('#mat-input-3').type('Garay')
    cy.get('#mat-input-4').type('Ram')
  
    cy.get('#mat-input-5').type('01/01/2000')
    cy.get('#mat-input-6').type('54720')
    cy.get('#mat-input-7').click()
    cy.wait(5000)
    cy.get('#mat-input-7').type('miriamma@gmail.com')
    cy.get('#mat-input-8').type('Hola1234')
    cy.get('#mat-input-9').type('Hola1234')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('form.ng-star-inserted > .flex-container > .btn-register > .mat-focus-indicator').click()
    cy.get('#mat-input-10').click()
  })

*/
})
