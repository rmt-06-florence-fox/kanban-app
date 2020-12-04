const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute');
const taskRoute = require('./taskRoute');
const categoryRoute = require('./categoryRoute');
const {authentication} = require('../middlewares/authentication');
const route = require('./categoryRoute');

route.get('/', (req,res)=>{
    res.status(200).json("Kamu sudah masuk");
})
router.use('/user', userRoute);
router.use(authentication);
router.use('/category', categoryRoute);
router.use('/task', taskRoute);


module.exports = router;