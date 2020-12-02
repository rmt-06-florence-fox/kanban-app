const { User } = require ('../models')
const { checkHash, genToken } = require ('../helpers/helper')

class ControllerUser {
    static async welcome (req ,res, next) {
        res.send('hello')
    }

    static async login (req ,res, next) {
        try {
            
            const comingUser = await User.findOne ({
                where: {
                    email: req.body.email
                }
            })
            if (comingUser) {
                if (checkHash(req.body.password, comingUser.password)) {
                    const access_token = genToken ({
                        id: comingUser.id,
                        username: comingUser.username,
                        email: comingUser.email,
                        OrganizationId: comingUser.OrganizationId
                    })
                    res.status(201).json({access_token})
                } else {
                    throw ({
                        status: 400,
                        message: `Email/Password don't match`})
                }
            } else {
                throw ({
                    status: 400,
                    message: `Email/Password don't match`})
            }
        } catch (err) {
            next(err)
        }
    }

    static async register (req ,res, next) {
        try {
            const newUser = await User.create (req.body)
            const access_token = genToken ({
                id: newUser.id,
                username: newUser.username,
                email: newUser.email
            })
            res.status(200).json({access_token})
        } catch (err) {
            next(err)
        }
    }

}


module.exports = ControllerUser