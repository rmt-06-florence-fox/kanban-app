const {User} = require("../models/index")
const Helper = require("../helper/Helper")

module.exports = async (req, res, next)=>{
    try{
        console.log("access authentication")
        const access_token = req.headers.access_token
        // console.log(req.headers)
        const decoded = Helper.verifyToken(access_token)
        req.loginUser = decoded
        const user = await User.findOne({
            where:{
                id: decoded.id
            }
        })
        if(user){
            // console.log("access authorization")
            next()
        } else {
            res.status(401).json({msg: 'please login first'})
        }
        
    }catch (e){
        console.log(e)
        res.status(500).json({message: 'internal server error'})
    }
}