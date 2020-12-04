const { Task } = require('../models')

async function authorization(req,res,next){
    let userId = req.loggedInUser.id 
    let taskId = req.params.id 
    try {
        let task = await Task.findOne({
            where:{
                id: taskId
            }
        })
        if(!task){
            throw{
                status: 404,
                msg: 'task not found'
            }
        }
        if(task.UserId === userId){
            next()
        }else{
            throw{
                status:401,
                msg: 'Unauthorized'
            }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authorization