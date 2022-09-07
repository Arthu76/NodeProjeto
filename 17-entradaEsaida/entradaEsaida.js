const anonimo = process.argv.indexOf('-a'/*flag*/) !== -1 // se o '-a' estiver presente na lista de argumentos(process.argv) ele va retornar verdadeiro no terminal
console.log(anonimo) //node entradaEsaida.js -a

if(anonimo) {
  // \n é uma quebra de linha
  process.stdout.write('Fala Anônimo!\n')//para ler no terminal
  process.exit() // terminar o processo
} else {
  process.stdout.write('Informe seu nome: ')
  // O evento "process.stdin.on('data'" ira acontecer depois que você digitar algo
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')
    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  })
}