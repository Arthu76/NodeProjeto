const sequence = {
  __id: 1, //atributo interno
  get id() { return this.__id++ }
}

const produtos = {}

// salvar o produto
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id
  produtos[produto.id] = produto
  return produto
}

// pegar produto por id
function getProduto(id) {
  return produtos[id] || {}
}

// retornar todos os produtos
function getProdutos() {
  return Object.values(produtos)
}

// exluir produto
function excluirProdutos(id) {
  const produto = produtos[id]
  delete produtos[id]
  return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProdutos }




/////////////////////////////////

// - trocar para POST
// - colocar em BODY
// - selecionar x-www-form...