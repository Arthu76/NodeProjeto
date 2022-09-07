const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
// axios é um client http que faz requisições para obter informações de algo que esta remoto

axios.get(url).then(response => {
  const funcionarios = response.data
  // console.log(funcionarios)
  
})




//desafio: Encontrar a mulher chinesa com o menor salário

axios.get(url).then(response => {
  const funcionarios = response.data

// Mulher Chinesa--------------------------------------------
  const lugar = pessoa => pessoa.pais == 'China'
  const mulher = pessoa => pessoa.genero == 'F'
  let chinesas = (funcionarios.filter(lugar).filter(mulher))

// Menor salário---------------------------------------------
  let valores = []
  for(let i in chinesas){
    let salarios = chinesas[i].salario
    valores.push(salarios)
  }

  let menor = valores.map(Number).reduce(function(a, b) {
    return Math.min(a, b)
  })

  let valor = menor.toString()
  const menorS = pessoa => pessoa.salario == valor


  console.log(funcionarios.filter(lugar).filter(mulher).filter(menorS))
})




// Resposta do professor-------------------

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  
  //Mulher Chinesa
  const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

  console.log(func)
  
})