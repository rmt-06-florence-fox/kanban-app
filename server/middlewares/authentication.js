const { User } = require('../models')
const { verifyToken } = require('../helpers/jwt')

module.exports = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        if (!access_token) {
            res.status(401).json({msg: 'login dulu'})
        } else {
            const decoded = verifyToken(access_token)
            req.loggedInUser = decoded
            // console.log(req.loggedInUser);
            // console.log(req.loggedInUser.id);
            const user = await User.findOne({where: {id: decoded.id}})
            if (user) {
                next()
            } else {
                res.status(401).json({msg: 'register dulu'})
            }
        }
    }
    catch(err) {
        res.status(500).json({msg: err.message})
    }
}