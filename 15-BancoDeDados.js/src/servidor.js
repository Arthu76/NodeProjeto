const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')// ele ira fazer um parse no body da requisição e irá entregar pra gente com os dados corretos transformando-os em OBJ
const bancoDeDados = require('./bancoDeDados')

//.urlencoded irá retornar uma função middleware, que transformara o corpo da requizição em OBJ
app.use(bodyParser.urlencoded({ extend: true }))
//como não foi utiliizado nenhuma URL expecifica, ele fara isso para todas as requizições

//obter os produtos
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

//obter o ID
app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

// submeter os dados e salvar um novo produto
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)
})

// excluindo o produto
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id)
  res.send(produto)
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})
