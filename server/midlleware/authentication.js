const {verifyToken} = require('../midlleware/helper-jwt')
const {User} = require('../models')

module.exports = async (req, res, next) => {
    try {
        const {access_token} = req.headers
        if(!access_token) res.status(401).json({message: "please login first"})
        else {
            const decoded = verifyToken(access_token)
            req.loggedIn = decoded
            
            const user = await User.findOne({
                where: {
                    id: decoded.id
                }
            })
    
            if(user) next()
            else {
                res.status(401).json({message: "Please login first"})
            }
        }
    } catch (error) {
        res.status(401).json({message: "Please login first"})
    }
}