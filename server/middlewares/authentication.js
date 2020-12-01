const {verify} = require('../helpers/tokenization')

module.exports = (req,res,next) => {
   const {access_token} = req.headers
   if(access_token){
      const decoded = verify(access_token)
      req.loggedIn = decoded
      next();
   }else{
      res.status(401).json({message:'You must login first'})
   }
}