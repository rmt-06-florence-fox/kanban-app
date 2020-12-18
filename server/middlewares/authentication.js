const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models/index")

async function authentication (req, res, next){
    // console.log(req.headers)
    const { access_token } = req.headers
    try {
        if(!access_token){
            throw {name : "authentication failed", status: 401}
        }
        else{
            const decoded = verifyToken(access_token)
            // console.log(decoded)
            const user = await User.findOne({
                where: { email : decoded.email}
            })
            // console.log(user)
            if(!user){
                throw {name : "Authentication Failed", status: 401 }
            }
            else {
                req.loggedInUser = decoded
                next()
            }
        }
    }
    catch (err) {
        next(err)
    }
}

module.exports = authentication