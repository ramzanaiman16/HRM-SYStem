const colors = require('colors')
const mongoose = require('mongoose')

const dbConnection =async ()=>{
    try {
        let conn =await mongoose.connect(process.env.Mongoose_URL)
        console.log(`Database is connected Successfully..!!`.bgGreen)
    } catch (error) {
        console.log(`error in database..!!`.bgRed )
        
    }

}
module.exports = dbConnection