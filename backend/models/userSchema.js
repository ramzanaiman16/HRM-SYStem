const mongoose = require('mongoose')
const validator = require('validator')


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true,
        trime: true
    },
    lname: {
        type: String,
        require: true,
        trime: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("not valid email")
            }
        }
    },
    mobile: {
        type: String,
        require: true,
       
    },
    gender: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
    },
    profile: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
},{timestamps:true})

module.exports = mongoose.model('users', userSchema)