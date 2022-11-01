const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const {Item} = require("../models/Item");
const mongoose = require('mongoose');


router.post("/additem",   (req, res) => {
    const item = new Item({Name: req.body.name, Company: req.body.company, Quantity: req.body.quantity, role: req.body.role})
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
        Company: false,
        role: false,
    }
    Item.find({Company: req.body.company, role: req.body.role}, projection,  (err, doc) =>{
        if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
        return res.status(200).json({
            success: true,
            data: doc
        })
    })
})

router.post("/deleteOrder", (req, res)=>{
    console.log(req.body)
    Item.deleteMany({company: req.body.company, role: req.body.role}, (err) =>{
        if(err) res.json({success: false, err, message: 'error occured while deleting '})
        return res.status(200).send({
            success: true,
            message: ' deleted Successfully'
        })
    })
})


module.exports = router;