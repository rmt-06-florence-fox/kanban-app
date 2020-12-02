const { Task } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id
            }
        })
        if(task.UserId === req.loggedInUser.id) {
            next()
        } else {
            throw {
                status: 401,
                message: "you are not authorized to edit and delete this task"
            }
        }
    } catch(err) {
        next(err)
    }
} 