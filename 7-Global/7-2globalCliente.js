require('./7-1global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Podera mudar facilmente'//um geito de concertar isso é utiliando o Object.freeze()
console.log(MinhaApp.nome)