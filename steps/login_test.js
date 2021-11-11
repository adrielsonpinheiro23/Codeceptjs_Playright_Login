var validacao = require('assert') //biblioteca assert
var faker = require('faker'); //biblioteca faker

const { I } = inject()

Feature('Login');

//Antes de todos os scenarios
BeforeSuite(()=> {
      console.log("Antes de tudo")

})

//Antes de cada scenario
Before(()=> {
      I.amOnPage('/') //Ele ja irá abrir a URL desejada 

})

//Depois de cada scenario
After(()=> {
    console.log("Scenario executado")

})

//Depois de todos os scenarios
AfterSuite(()=> {
      console.log("Depois de tudo")
  
  })


Scenario('Validate Invalid E-mail on Create Account', ({ I }) => {
      
      //removido o I.amOnpage pois ele irá abrir antes de cada scenário com o BEFORE
      I.click('.login')
      I.click('#SubmitCreate')
      I.see('Invalid email address.')
});


Scenario('Validate Invalid E-mail on Create Account 2', ({ I }) => {
      I.click('.login')
});

Scenario('Validate Invalid E-mail on Create Account 3', ({ I }) => {
      I.click('.login')
});



