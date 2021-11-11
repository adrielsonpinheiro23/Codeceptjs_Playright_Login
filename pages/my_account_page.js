const { I } = inject();

module.exports = {

  button: {
    userName: '.header_user_info'

  },

  validateUserCreate(primeiroNome, ultimoNome) {
  I.waitForElement(this.button.userName)
  I.see(`${primeiroNome} ${ultimoNome}`)
  }

}
