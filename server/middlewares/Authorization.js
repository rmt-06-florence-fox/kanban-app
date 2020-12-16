const { Task } = require("../models")

module.exports = (req, res, next) => {
    const id = req.params.id
    // console.log(id)
    Task.findOne({
        where: {
            id
        }
    })
        .then(data => {
            if(data) {
                if (data.UserId === req.LoginUser.id) {
                    next()
                } else {
                    next({
                        name: "Authorized"
                    })
                    // res.status(401).json({msg: "Authorized"})
                }
            } else {
                next({name: "DataNotFound"})
            }
        })
        .catch(err => {
            next(err)
            // res.status(500).json(err)
        })
}