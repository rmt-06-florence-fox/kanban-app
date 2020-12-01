const { Task } = require('../models');

module.exports = async (req,res,next) => {
    try {
        const todo = await Task.findOne({
            where: {
                id: req.params.id
            }
        })
        if(todo.UserId === req.loggedInUser.id) {
            next()
        } else {
            throw {
                status: 401,
                message: 'not authorized'
            }
        }
    } catch (err) {
        next(err)
    }
}