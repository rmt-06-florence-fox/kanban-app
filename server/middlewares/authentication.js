const {User} = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = async (req,res, next) => {
    try {
        const { access_token } = req.headers
        if (!access_token) {
            throw { status: 401, message: `Access denied, please login first`}
        } else {
            const decoded = verifyToken(access_token)
            req.loggedInUser = decoded
            const user = await User.findOne({
                where: { id: decoded.id }
            })
            if (user) {
                next()
            } else {
                throw { status: 401, message: `Access denied, please login first`}
            }
        }        
    } catch (error) {
        next(error)
    }
}