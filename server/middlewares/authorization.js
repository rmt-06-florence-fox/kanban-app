const { Task } = require("../models/index")

function authorization (req, res, next) {
    let UserId = req.dataUser.id
    let id = req.params.id
    // console.log(id)

    Task.findByPk(id)
        .then(data => {
            // console.log(data.UserId, "-----------------")
            if(UserId === data.UserId) {
                next()
            }else {
                res.status(500).json({ error: "You dont have permission"})
            }
        })
        .catch(err => { 
            res.status(500).json(err)
        })

}

module.exports = authorization