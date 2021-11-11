const { I } = inject();

module.exports = {
    
    fields: {
        firstName: '#customer_firstname',
        lastName: '#customer_lastname',
        password: '#passwd',
        address: '#address1',
        days: '#days',
        months: '#months',
        years: '#years',
        city: '#city',
        state: '#id_state',
        zipCode:'#postcode',
        phone: '#phone_mobile'
      },
    
      button: {
        male: '#id_gender1',
        registrar: 'Register'
      },
    
      messages: {
    
        
      },
    
      fillFieldsCreateUser(primeiroNome, ultimoNome) {
        I.click(this.button.male)
        I.fillField(this.fields.firstName, primeiroNome)
        I.fillField(this.fields.lastName, ultimoNome)
        I.fillField(this.fields.password,secret('12345qa'))
        I.scrollTo(this.fields.address)
        I.wait(5)
        I.selectOption(this.fields.days,'23')
        I.selectOption(this.fields.months,'12')
        I.selectOption(this.fields.years,'1990')
       
        //Address
        I.fillField(this.fields.address,'Rua da Cachaça, 101')
        I.fillField(this.fields.city,'Manaus')
        I.click(this.fields.state)   
        I.fillField(this.fields.state,'Arizona')
    
        I.scrollPageToBottom
        
        I.fillField(this.fields.zipCode,'00000')
        I.fillField(this.fields.phone,'92992472135')
            
    },

    createUser() {
        I.click(this.button.registrar)
    }

}
