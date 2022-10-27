const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");
const {Company} = require("../models/Company");
const mongoose = require('mongoose');

router.post("/addcompany",   (req, res) => {
    const company = new Company({Name: req.body.company})
    company.save((err, doc) =>{
        if(err){return res.json({success: false, err, message: 'Some error Ocurred'})}
        return res.status(200).json({
            success: true
        })
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