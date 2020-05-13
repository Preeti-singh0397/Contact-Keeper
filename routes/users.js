const express=require('express');
const router=express.Router();

// @router POST api/users
//@desc Register user
// @access public
router.post('/',(req,res)=>{
res.send("Register User");
})

module.exports=router;