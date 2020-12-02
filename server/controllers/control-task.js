const { Task } = require ('../models/index')

class ControllerTask {
    static async findAll (req, res, next) {
        res.send('task')
    }

    static async finByOrg (req, res, next) {
        
    }
}

module.exports = ControllerTask