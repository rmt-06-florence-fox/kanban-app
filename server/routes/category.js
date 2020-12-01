console.log('start in routing category');
const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/category')
const authorization = require('../middlewares/authorization')

router.get('/categories', CategoryController.show)
router.post('/categories', CategoryController.create)

router.use('/categories/:id', authorization)
router.patch('/categories/:id', CategoryController.edit)
router.delete('/categories/:id', CategoryController.delete)

module.exports = router
console.log('end in routing category');