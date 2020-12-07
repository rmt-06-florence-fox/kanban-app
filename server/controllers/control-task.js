const { Task, Organization, Category, User } = require ('../models/index')

class ControllerTask {
    // static async findAll (req, res, next) {
    //     try {
    //         const taskList = await Task.findAll ()
    //         res.status(200).json(taskList)
    //     } catch (err) {
    //         next (err)            
    //     }
    // }

    // static async findByOrg (req, res, next) {
    //     try {
    //         const taskList = await Task.findAll ({
    //             where: {
    //                 OrganizationId: req.loggedUser.OrganizationId
    //             },
    //             include: ['User', {
    //                 model:Organization,
    //                 include: [Category]
    //             }]
    //         })
    //         res.status(200).json(taskList)
    //     } catch (err) {
    //         next (err)
    //     }
    // }

    static async get (req, res, next) {
        try {
            const orgData = await Organization.findOne ({
                where: {
                    id: req.loggedUser.OrganizationId
                },
                include: [{
                    model: Category,
                    order: [['id', 'DESC']],
                    include: [{
                        model:Task,
                        include: User,
                        order: [['id', 'DESC']]
                    }]
                }]
            })
            console.log(orgData.Categories.sort())
            res.status(200).json(orgData)
        } catch (err) {

        }
    }

    static async post (req, res, next) {
        try {
            const task = req.body
            task.UserId = req.loggedUser.id
            const newTask = await Task.create (task)
            console.log(newTask)
            res.status(200).json(newTask)
        } catch (err) {
            next(err)
        }
    }

    static async getId (req, res, next) {
        try {
            const task = await Task.findByPk(req.params.id)
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }
    }

    static async putId (req, res, next) {
        try {
            console.log(req.body, req.params.id)
            const task = await Task.update (req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }
    }

    static async patchId (req, res, next) {
        try {
            const task = await Task.update (req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json(task)
        } catch (err) {
            next(err)
        }
    }

    static async deleteId (req, res, next) {
        try {
            const del = await Task.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.status(201).json({ message: 'item deleted' });
        } catch (err) {
            next(err)
        }
    }

}

module.exports = ControllerTask