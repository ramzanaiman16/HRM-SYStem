const mongoose = require('mongoose')

// Creating a model schema

const userModelSchema = new mongoose.Schema({
    name :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true,
        unique : true
    },
    password :{
        type : String ,
        require : true
    },
    role:{
        type: Number,
        default : 0
    }
},{timestamps: true})

module.exports = mongoose.model('modelusers', userModelSchema)