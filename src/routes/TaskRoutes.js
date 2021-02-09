const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middlewares/TaskValidation')
const MacAddressValidation = require('../middlewares/MacAddressValidation')
const ObjectIdValidation = require('../middlewares/ObjectIdValidation')

//! Passa apenas '/', pois o '/task' já está sendo 
//! informado na chamada da rota no src/index.js
router.post('/', TaskValidation, TaskController.create)
router.put('/:id', TaskValidation, TaskController.update)
router.get('/:id', ObjectIdValidation, TaskController.find)
router.get('/', MacAddressValidation, TaskController.all)

module.exports = router