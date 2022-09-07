//quando você cria uma referencia para lodash, você cria a partir  do underscore (_)
const _ = require('lodash')// a partir de ('lodash'), ele vai procurar dentro da pasta lodash um arquivo chamado index.js
setInterval(() => console.log(_.random(1, 1000)), 2000)