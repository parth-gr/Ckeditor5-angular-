const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    fullname : String,
    email: String ,
    password: String,
    groupid : String
})
module.exports = mongoose.model('user', userSchema, 'users') // third arg 'users' is collection name
