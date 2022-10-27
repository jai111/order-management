const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const {Item} = require("../models/Item");
const mongoose = require('mongoose');


router.post("/additem",   (req, res) => {
    const item = new Item({Name: req.body.name, Company: req.body.company, Quantity: req.body.quantity})
    item.save((err, doc) =>{
        if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
        return res.status(200).json({
            success: true
        })
    })
   
});

router.post("/getItemByCompany", (req, res)=>{
    console.log(req.body)
    let projection = {
        __v: false,
        _id: false,
        Company: false
    }
    Item.find({Company: req.body.company}, projection,  (err, doc) =>{
        if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
        return res.status(200).json({
            success: true,
            data: doc
        })
    })
})


module.exports = router;