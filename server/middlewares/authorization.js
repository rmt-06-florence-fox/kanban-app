const { Task } = require('../models/index')

async function authorization (req, res, next) {
    
    const { id } = req.params
    try {
        const tasks = await Task.findByPk(id)
        if(!tasks) {
            throw { message: 'Task not found', status: 404}
        }
        else if (tasks.UserId === req.loggedIn.id) {
            next()
        }
        else {
            throw {
                message: 'Not Authorized', status: 401
            }
        }
    }
    catch(error) {
        next(error)
    }
}

module.exports = authorization