const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    Company: String,
    Name: String,
    Quantity: Number,
})      

const Item = mongoose.model('Item', itemSchema);

module.exports = { Item }
