const { compare } = require('bcryptjs')
const { User, Organization, UserOrganization } = require('../models/index')
const { getToken } = require('../helpers/jwt')


class UserController {
    static async register(req, res, next) {
        const obj = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            nameOrganization: req.body.nameOrganization
        }
        try {
            const user = await User.create({name: obj.name, email: obj.email, password: obj.password})
            const organization = await Organization.create({name: nameOrganization})
            const userOrg = await UserOrganization.create({UserId: user.id, OrganizationId: organization.id})
            res.status(201).json({message: 'Create Data Successful!!'})
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        const obj = {
            email: req.body.email,
            password: req.body.password
        }
        try {
            const data = await User.findOne({where: {email: obj.email}})
            if (data) {
                if (compare(obj.password, data.password)) {
                    const access_token = getToken(data)
                    res.status(200).json({access_token})
                } else {
                    throw {
                        status: 401,
                        message: 'Invalid Account!!'
                    }
                }
            } else {
                throw {
                    status: 404,
                    message: 'Data not found!!'
                }
            }
        } catch (error) {
            next(error)
        }
    }
}


module.exports = UserController