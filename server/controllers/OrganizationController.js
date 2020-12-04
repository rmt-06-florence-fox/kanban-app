const {Organization} = require('../models/index')

class OrganizationController {
    static async createOrganization (req, res, next) {
        try {
            let obj = {
                name: req.body.name
            }
            let data = await Organization.create(obj)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getOrganization(req,res, next){
        try {
            let data = await Organization.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrganizationController