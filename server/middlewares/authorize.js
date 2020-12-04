const { Task } = require('../models/index')

module.exports = (req, res, next) => {
    Task.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(responseData => {
        if (responseData) {
            if (responseData.UserId === req.loggedInUser.id) {
                next()
            } else {
                next({
                    status: 401,
                    message: 'You are not authorized to access the data!'
                })
            }
        } else {
            next({
                status: 404,
                message: 'Data not found!'
            })
        }
    })
    .catch(err => {
        next(err)
    })
}