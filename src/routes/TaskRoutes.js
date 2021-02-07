const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')

//! Passa apenas '/', pois o '/task' já está sendo 
//! informado na chamada da rota no src/index.js
router.post('/', TaskValidation, TaskController.create)

module.exports = router