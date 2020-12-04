const {Task} = require('../models/index')

module.exports = async (req, res, next) => {
    let idTask = req.params.id
    let user = req.user
    try {
        let data = await Task.findByPk(idTask)
        if(!data){
            throw {
                status : 404,
                message : 'data not found'
            }
        } else {
            if(data.userId == user.id){
                next()
            } else {
                throw {
                    status : 401,
                    message : 'unauthorized'
                }
            }
        }
        
    } catch (err) {
        next(err)
    }
}