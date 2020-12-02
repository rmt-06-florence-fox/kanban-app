const { Task, Organization, Category } = require ('../models/index')

class ControllerTask {
    static async findAll (req, res, next) {
        try {
            const taskList = await Task.findAll ()
            res.status(200).json(taskList)
        } catch (err) {
            next (err)            
        }
    }

    static async finByOrg (req, res, next) {
        try {
            const taskList = await Task.findAll ({
                where: {
                    OrganizationId: req.loggedUser.OrganizationId
                },
                include: ['User', {
                    model:Organization,
                    include: [Category]
                }]
            })
            res.status(200).json(taskList)
        } catch (err) {
            next (err)
        }
    }
}

module.exports = ControllerTask