const express = require('express')
const {env} = require('./config')
// const cors = require('cors')

const server = express()
// server.use(cors())
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes')

server.use('/task', TaskRoutes)

server.listen(env.port, () => {
  console.log(`API ONLINE on port ${env.port}!`);
})