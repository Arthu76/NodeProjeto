// LEMBRETE: quando os paramtreos estao assim(...paramtro), significa que pode ser passados quantos parametros quiser
module.exports = function(...nomes) {
  return nomes.map(nome => `Boa semana ${nome}!`)
}