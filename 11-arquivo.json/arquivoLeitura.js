// O modulo filesSystem('fs') é responsavel por tanto ler ,escrever ou verificar o conteudo de uma pasta
const fs = require('fs')
//__dirname é uma constante que está presente em todos os modulos do node que representa o diretório atual
const caminho = __dirname + '/arquivo.json'


//------------------------------------------------------------------------------------------------------------------------------------

// ler um arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//------------------------------------------------------------------------------------------------------------------------------------

// ler um arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)// para transformar o 'conteudo', que é uma string, em objeto
  console.log(`${config.db.host}:${config.db.port}`)
})// aqui só vai aparecer no console quando o arquivo tiver carregado depois da callback, por isso ele aparece em ultimo


//------------------------------------------------------------------------------------------------------------------------------------

// forma mais simples de ler um arquivo JSON
const config = require('./arquivo.json')// aqui é preciso utilizar o '.json' da pasta, pois se não ele ira procurar um arquivo '.js'
console.log(config.db)

//------------------------------------------------------------------------------------------------------------------------------------

//leitura de uma pasta com o 'fs'

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteudo da pasta...')
  console.log(arquivos)
})