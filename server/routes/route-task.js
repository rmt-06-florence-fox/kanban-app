const { ControllerTask } = require ('../controllers')
const task = require('express').Router()
const authorization = require ('../middlewares/authorization')


task.get('/', ControllerTask.get);
task.post('/', ControllerTask.post);
// task.get('/byorg', ControllerTask.findByOrg)
task.get('/:id', authorization, ControllerTask.getId);
task.put('/:id', authorization, ControllerTask.putId);
task.patch('/:id', authorization, ControllerTask.patchId);
task.delete('/:id', authorization, ControllerTask.deleteId);

module.exports = task