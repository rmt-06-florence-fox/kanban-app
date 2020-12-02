const { Task, Organization, Category } = require ('../models/index')

class ControllerOrganization {
    static async getOrg (req, res, next) {
        try {
            console.log(req.loggedUser)
            const orgData = await Organization.findOne ({
                where: {
                    id: req.loggedUser.OrganizationId
                },
                include: [{
                    model: Category,
                    include: [Task]
                }]
            })
            res.status(200).json(orgData)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerOrganization