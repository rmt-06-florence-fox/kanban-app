const CategoryController = require('../controllers/CategoryController')

const route = require('express').Router()

route.post('/category', CategoryController.createCategory)
route.get('/category', CategoryController.getCategory)

module.exports = route