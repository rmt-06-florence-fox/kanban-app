const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const controller = require('../controllers')


router.use(authentication)
router.post('/', controller.create)
router.get('/', controller.findall)

router.use('/:id', authorization)
router.put('/:id', controller.edit)
router.delete('/:id', controller.delete)


module.exports = router