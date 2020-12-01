const {Task} = require('../models')

module.exports = (req, res, next) => {
    Task.findOne({
        where:{
            id: req.params.id
        }
    })
    .then(task =>{
        if(task.UserId == req.loggedIn.id){
            next()
        } else {
            throw{
                status: 401,
                message: 'No Authorization for this task'
            }
        }
    })
    .catch(err =>{    
        res.status(500).json({ message: 'No Authorization for this task'})
    })
}