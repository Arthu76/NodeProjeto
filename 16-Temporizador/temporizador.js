//npm i node-schedule - é o pacote do node que da a possibilidade fazer um agendamento de tarefas
//@1.3.0 -E - é a versão usada e o -E serve para que ela não mude

const schedule = require('node-schedule')

// ('*/5 *minuto *hora *dia *mês *dia da semana') - o primeiro são os segundos que irão contar - EX de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000)

// existe um objeto dentro do node-schedule chamado RecurrenceRule que é uma regra de recorrência

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5/* Dias da semana */)]
regra.hour = 20
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log('Executando Tarefa 2!', new Date().getSeconds())
})