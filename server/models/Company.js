const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    Name: {
        type: String,
        trim:true,
        unique: true,
        required: true, 
    },
})      

const Company = mongoose.model('Company', companySchema);

module.exports = { Company }
