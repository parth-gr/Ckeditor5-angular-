const mongoose = require('mongoose')

const Schema = mongoose.Schema
const adminSchema = new Schema({
    email: String ,
    password: String
})
module.exports = mongoose.model('admin', adminSchema, 'admins') // third arg 'channels' is collection name
