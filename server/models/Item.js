const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    Company: String,
    Name: String,
    Quantity: Number,
    role: String,
})      

const Item = mongoose.model('Item', itemSchema);

module.exports = { Item }
