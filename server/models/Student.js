const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    user_id :  { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    grade : {
        type:Number
    },
    email :{
        type: String
    },
    teachers: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    marks: {
        midterm1:
        {
            maths : {type: Number},
            science: {type: Number},
            social: {type: Number},
            hindi: {type: Number},
            english: {type: Number},
        },
    semester1: 
        {
            maths : {type: Number},
            science: {type: Number},
            social: {type: Number},
            hindi: {type: Number},
            english: {type: Number},
        }
    ,
    midterm2: 
        {
            maths : {type: Number},
            science: {type: Number},
            social: {type: Number},
            hindi: {type: Number},
            english: {type: Number},
        }
    ,
    semester2: 
        {
            maths : {type: Number},
            science: {type: Number},
            social: {type: Number},
            hindi: {type: Number},
            english: {type: Number},
        }
    }
})      

const Student = mongoose.model('Student', studentSchema);

module.exports = { Student }
