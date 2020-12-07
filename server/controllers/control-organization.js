const { Task, Organization, Category, User } = require ('../models/index')

class ControllerOrganization {
    static async getOrg (req, res, next) {
        try {
            // console.log(req.loggedUser)
            const orgData = await Organization.findOne ({
                where: {
                    id: req.loggedUser.OrganizationId
                },
                include: [{
                    model: Category,
                    include: [{
                        model:Task,
                        include: User
                    }]
                }]
            })
            res.status(200).json(orgData)
        } catch (err) {
            next(err)
        }
    }

    static async getOrgList (req, res, next) {
        try {
            const orgList = await Organization.findAll ()
            res.status(200).json(orgList)
        } catch (err) {
            next(err)
        }
    }

    static async addOrg (req, res, next) {
        try {
            const newOrg = await Organization.create (req.body)
            res.status(201).json(newOrg)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerOrganization