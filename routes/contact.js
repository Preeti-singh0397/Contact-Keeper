const express=require('express');
const router=express.Router();

// @router   GET api/contact
// @desc     Get all the user contact
// @access   Private
router.get('/',(req,res)=>{
res.send("Get all the contact");
});

// @router   POST api/contact
// @desc     Add new contact
// @access   Private
router.post('/',(req,res)=>{
    res.send("Add contact");
    });
    
// @router   PUT api/contact/:id
// @desc     Update contact
// @access   Private
router.put('/:id',(req,res)=>{
    res.send("Update contact");
    });

// @router   DELETE api/contact/:id
// @desc     delete contact
// @access   Private
router.delete('/:id',(req,res)=>{
    res.send("delete contact");
    });


module.exports=router;