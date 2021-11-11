var validacao = require('assert') //biblioteca assert
var faker = require('faker'); //biblioteca faker

const {home_page, login_page, create_user_page, my_account_page} = inject()

Feature('Create User');

Scenario('Login with success', async ({login}) => {
    await login('user')
})

Scenario('Create a New Account', async ({ I }) => {

    var primeiroNome = faker.name.firstName();
    var ultimoNome = faker.name.lastName();

    console.log(`${primeiroNome} ${ultimoNome}`)

    I.amOnPage ('/')

    //home
    home_page.accessLoginPage()

    //login
    login_page.submitCreateNewAccount(faker.internet.email())

    //validações
    var title = await I.grabTitle()    
    validacao.equal(title, 'Login - My Store')
    I.waitForElement('#customer_firstname', 10)
    var tituloPrincipal = await I.grabTextFrom('.page-heading')
    validacao.equal(tituloPrincipal, 'Create an account')

    //create new user
   create_user_page.fillFieldsCreateUser(primeiroNome, ultimoNome)
   create_user_page.createUser()

    //My Account
    my_account_page.validateUserCreate(primeiroNome, ultimoNome)


    I.wait(5)

});
