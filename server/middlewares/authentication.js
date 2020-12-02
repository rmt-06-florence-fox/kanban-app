const { User } = require("../models")
const { verifyToken } = require("../helpers/jwt")

module.exports = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        console.log("masuk auth");
        if (!access_token) {
            throw {
                status: 401,
                message: "Please Login or Register First"
            }
        } else {
            const decode = verifyToken(access_token)
            const user = await User.findOne({
                where: {
                    id: decode.id
                }
            })
            if (!user){
                req.loggedInUser = decode
                next()
            } else {
                throw {
                    status: 401,
                    message: "Please Login or Register First"
                }
            }
        }
    } catch (err) {
        next(err)
    }
}