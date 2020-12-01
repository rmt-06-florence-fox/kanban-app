const {Task} = require('../models/index')

module.exports = (req, res, next) => {
    let idTask = req.params.id
    let user = req.user
    try {
        let data = Task.findByPk(idTask)
        if(data.userId !== user.id){
            throw {
                status : 401,
                message : 'unauthorized'
            }
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}