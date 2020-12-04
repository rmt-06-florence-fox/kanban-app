const CategoryController = require('../controllers/CategoryController')

const route = require('express').Router()

route.post('/', CategoryController.createCategory)
route.get('/', CategoryController.getCategory)

module.exports = route