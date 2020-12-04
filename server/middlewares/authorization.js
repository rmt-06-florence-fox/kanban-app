const { Task } = require ("../models")

module.exports = async (req, res, next) => {
    try {
           const task = await Task.findOne ({
                where : {
                    id : req.params.id
                }
            })

            if (!task) {
               throw {
                    status : 404,
                    msg : "Task Not Found"
                }
            }

            if (task.UserId === req.dataUser.id) {
                next()
            } else {
                throw {
                    status : 401,
                    msg : "You are not authorize to access this Task"
                }
            }
    } catch (error) {
            next (error)
        }
}