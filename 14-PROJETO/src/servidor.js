const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
  res.send({ nome: 'Notebook', preco: 123.45})// Mesmo que seja um obj, o método 'send' irá converter para JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})
