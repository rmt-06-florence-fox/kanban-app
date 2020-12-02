const {Task} = require('../models')
const Helper = require('../helpers')

module.exports = async (req, res, next) => {
    try{
        const id = +req.params.id
        //console.log(id)
        const task = await Task.findByPk(id)
        const user = req.headers.currentUser

        if (task) {
 
            if(task.UserId === user.id){
                next()

            } else {
                throw {status : 401, message : 'Authorization error. You have no right to access this'}
            }
 
        } else { 
           throw {status : 404, message : 'task is not found'}
        
        }

    } catch (err){
        next(err)
    }
}