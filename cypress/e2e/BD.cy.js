
describe('template spec', function()  {
  it('passes', function ()  {
    let email = "corpca4@gmail.com";
    cy.task("SayHello", "Miri");
    let register = cy.task("queryDb", `SELECT * FROM AspNetUsers WHERE Email = '${email}'`);
    console.log(register)
  //  cy.task('queryTestDb', 'select * from AspNetUsers;').then((result)=>{
  //   cy.log ("conexion").then(()=>{

  //   })
  //  });
  })
})