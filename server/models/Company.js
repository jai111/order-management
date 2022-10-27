const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    Name: String,
})      

const Company = mongoose.model('Company', companySchema);

module.exports = { Company }
