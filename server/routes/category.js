console.log('start in routing category');
const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/category')
// pending action
const Authorization = require('../middlewares/authorization')

router.get('/', CategoryController.show)
router.post('/', CategoryController.create)

// router.use('/:id', Authorization.category) //! next time it is used, an error occurs because the insert / update violates the foreign key restriction
router.patch('/:id', CategoryController.edit)
router.delete('/:id', CategoryController.delete)

module.exports = router
console.log('end in routing category');