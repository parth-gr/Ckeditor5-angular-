const mongoose = require('mongoose')

const Schema = mongoose.Schema
const channelSchema = new Schema({
    channelid: String ,
    channelname: String,
    channeldata: String 
})
module.exports = mongoose.model('channel', channelSchema, 'channels') // third arg 'channels' is collection name
