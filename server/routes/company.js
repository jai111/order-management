const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const {Company} = require("../models/Company");
const mongoose = require('mongoose');

router.post("/addcompany",   (req, res) => {
    const company = new Company({Name: req.body.company})
    Company.findOne({Name: req.body.company}, (err, doc) =>{
        console.log(doc)
        if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
        // if(doc.Name){
        //     return res.json({success: false, err, message: 'Company already exist'})
        // }
        if( ! doc){
            company.save((err, doc) =>{
                if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
                return res.status(200).json({
                    success: true
                })
            })
        }
        else{
            return res.json({success: false, err, message: 'company already exist'})
        }
    })
   
});

router.get("/getcompanies", (req, res) =>{
    Company.find({}, (err, companies) =>{
        if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
        return res.status(200).json({
            success: true,
            companies: companies
        })
    })
})

module.exports = router;