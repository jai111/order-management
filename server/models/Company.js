const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    Name: {
        type: String,
        trim:true,
        unique: true,
        required: true, 
    },
    role:{
        type: String,
    }
})      

const Company = mongoose.model('Company', companySchema);

module.exports = { Company }
