const {verifyToken} = require('../helper/jwt')
const {User} = require('../models/index')
module.exports = async (req, res, next) => {
    try {
        const {access_token} = req.headers
        if(!access_token){
            throw({
                status: 401,
                message: "You must login first"
            })
        } else {
            const decode = verifyToken(access_token)
            req.userLoggedIn = decode
            let data = await User.findOne({
                where: {
                    id: decode.id
                }
            })
            if(data){   
                req.userOrganization = data.OrganizationId
                next()
            } else {
                throw({
                    status: 401,
                    message: "You must login first"
                })
            }
        }
    } catch (err) {
        next(err)
    }
}

