const { ControllerTask } = require ('../controllers')
const task = require('express').Router()


task.get('/', ControllerTask.get);
task.post('/', ControllerTask.post);
// task.get('/byorg', ControllerTask.findByOrg)
task.get('/:id', ControllerTask.getId);
task.put('/:id', ControllerTask.putId);
task.patch('/:id', ControllerTask.patchId);
task.delete('/:id', ControllerTask.deleteId);

module.exports = task