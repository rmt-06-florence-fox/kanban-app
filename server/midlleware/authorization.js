const {Task} = require('../models') 

module.exports = async (req,res, next) => {
    try {
        const task = await Task.findOne({
            where: {
                id : +req.params.id
            }
        })
        if(!task) res.status(404).json({message: "Data not found!"})
        else if(task.UserId == req.loggedIn.id) {
            next()
        } else {
            console.log(task);
            res.status(401).json({message: "you are not authorized to access this todo!"})
        }
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
    }
}