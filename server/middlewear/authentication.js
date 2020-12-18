const {User} = require('../models/index')
const {checkToken} = require('../helpers/jwt')
module.exports = (req, res, next) => {
    let token = req.headers.access_token
    try {
       if(!token){
           throw {
            status : 401,
            message : 'please login'
           }
       } else {
            const user = checkToken(token)
            if(!user){
                throw {
                    status : 404,
                    message : 'data not found'
                }
            } else {
                req.user = user
                const data = User.findByPk(user.id)
                if(!data){
                    throw {
                        status : 404,
                        message : 'data not found'
                    }
                } else {
                    next()
                }
            }
       }
    } catch (err) {
        next(err)
    }
}