const { I } = inject();

module.exports = {

  fields: {

  
  },

  button: {
    loginButton: '.login'
  },

  messages: {

    
  },

  accessLoginPage() {
    I.click(this.button.loginButton)
  }

}
