const { Task } = require("../models/index")

function authorization (req, res, next) {
    let UserId = req.dataUser.id
    let id = req.params.id

    Task.findByPk(id)
        .then(data => {
            if(UserId === data.UserId) {
                next()
            }else {
                throw {
                    status: 500,
                    message: { error: "You dont have permission" }
                }
            }
        })
        .catch(err => { 
            next(err)
        })

}

module.exports = authorization