const router = require('express').Router()
const taskControl = require('../controllers/task')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', taskControl.getData)
router.post('/', taskControl.postData)
router.get('/:id', authorization, taskControl.getDataId)
router.patch('/:id', authorization, taskControl.patchData)
router.put('/:id', authorization, taskControl.putData)
router.delete('/:id', authorization, taskControl.delete)

module.exports = router