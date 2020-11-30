const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication(req, res, next){
    const { access_token } = req.headers
    try {
        if(!access_token){
            throw {
                status: 401,
                msg: 'Please Login First'
            }
        }
        else{
            const decoded = verifyToken(access_token)
            const user = User.findOne({where: {id: decoded.id}})
            if(!user){
                throw {
                    status: 401,
                    msg: "Please Login First/register if you don't have an account"
                }
            }
            else {
                req.loggedUserIn = decoded
                next() 
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
