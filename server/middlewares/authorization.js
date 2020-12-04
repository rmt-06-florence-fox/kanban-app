const {Task} = require('../models');

async function authorization(req, res, next){
    const checkUserId = Number(req.loggedIn.id);
    const TaskId = req.params.id;
    try {
        const foundTask = await Task.findOne({where: {id: TaskId}});
        if(!foundTask){
            res.status(404).json({message: 'Task not found'})
        } else {
            if(foundTask.UserId === checkUserId){
                next();
            } else {
                res.status(401).json({message: 'You are not authorize'})
            }
        }
    } catch(error){
       res.status(500).json(error);
    }
}

module.exports = {
    authorization
}