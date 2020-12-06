const { Task } = require('../models/index')

module.exports = async (req, res, next) => {
    try {
        const task = await Task.findOne({where: {id: Number(req.params.id)}})
        if (task) {
            if (task.UserId === req.loggedInUser.id) {
                next()
            } else {
                throw {
                    status: 401,
                    message: 'You are not authorized!!'
                }
            }
        } else {
            throw {
                status: 404,
                message: 'Data not found!!'
            }
        }
    } catch (error) {
        next(error)
    }
}