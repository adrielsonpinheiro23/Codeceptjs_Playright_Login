module.exports = { 
    bootstrap: function() {
        console.log('Isso executou antes do projeto todo') //executar e exportar uma massa de dados
    },

    teardown: function() {
        console.log('Isso executou depois do projeto todo') // limpar a massa de dados
    }
}