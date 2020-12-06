const categories = require ('express').Router()
const { ControllerCategory } = require ('../controllers/index')


categories.post('/', ControllerCategory.add)
categories.post('/bulk', ControllerCategory.addBulk)
categories.patch('/:id', ControllerCategory.editName)
categories.delete('/:id', ControllerCategory.delete)

module.exports = categories