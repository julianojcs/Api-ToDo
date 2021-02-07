const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

//! Passa apenas '/', pois o '/task' já está sendo 
//! informado na chamada da rota no src/index.js
router.post('/', TaskController.create)

module.exports = router