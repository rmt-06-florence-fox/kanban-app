const { Task } = require('../models')

module.exports = async (req, res, next) => {
    try {
        console.log(req.params.id);
        const task = await Task.findOne({where: {id: req.params.id}})
        if (!task) {
            res.status(404).json({msg: 'Task not found'})
        } else if (task.UserId === req.loggedInUser.id) {
            next()
        } else {
            res.status(401).json({msg: 'unauthorized'})
        }
    }
    catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
}