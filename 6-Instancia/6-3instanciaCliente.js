const contadorA = require('./6-1instanciaUnica')
const contadorB = require('./6-1instanciaUnica')

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)//Aqui ele vai retornar sempre a mesma instancia

const contadorC = require('./6-2instanciaNova')()
const contadorD = require('./6-2instanciaNova')()

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)//Aqui não muda porque são novas intancias criadas a partir de uma factory