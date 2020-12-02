const { verify } = require('../helpers/jwt')
const { User } = require('../models/index')

module.exports = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        if (access_token) {
            const decoded = verify(access_token)
            const data = await User.findOne({where: {id: decoded.id}})
            if (data) {
                req.loggedInUser = decoded
                next()
            } else {
                throw {
                    status: 401,
                    message: 'Invalid Account!!'
                }
            }
        } else {
            throw {
                status: 401,
                message: 'Please Login First!!'
            }
        }
    } catch (error) {
        next(error)
    }
}