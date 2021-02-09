const Mongoose = require('mongoose')
const { env } = require('./')
const connection = Mongoose.connection
const STATUS = {
  0: 'Desconectado',
  1: 'Conectado',
  2: 'Conectando',
  3: 'Desconectando'
}

Mongoose.connect(
  env.dbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log('Conectado ao Database com sucesso!')
      return
    }
    console.log('Falha na conexão com o BD!', error)
  }
)

connection.once('open', () => console.log('Database rodando!'))

function isConnected() {
  return STATUS[connection.readyState]
}

module.exports = {
  Mongoose,
  connection,
  isConnected
}
