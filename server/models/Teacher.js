const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    user_id :  { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    email: String,
    subject: String,
})      

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = { Teacher }
