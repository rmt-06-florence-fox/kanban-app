const { Task } = require ('../models/index')

module.exports = async (req, res, next) => {
    try {
        const task = await Task.findOne ({
            where: {
                id: req.params.id
            }
        })

        if (task.UserId == req.loggedUser.id) {
            next ()
        } else {
            throw {status: 401, message: `Not Authorized`}
        }

    } catch (err) {
         next(err)
    }
}