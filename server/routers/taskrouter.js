const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const controller = require('../controllers')


router.use(authentication)
router.post('/', controller.create)
router.get('/', controller.findall)



module.exports = router