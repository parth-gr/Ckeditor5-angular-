const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Channel = require('../models/channel')
const Admin = require('../models/admin') ;
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const { collection } = require('../models/channel');
const db =  "mongodb+srv://usermohit:250499@eventsdb-holta.mongodb.net/eventsdb?retryWrites=true&w=majority" 
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true} ,err => {
    if (err){
        console.error('Error! '+ err)
    } else {
        console.log('Connected to mongodb')
    }
})
var dbConnect = mongoose.connection ;
function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/', (req , res) => {
    res.send('From API route')
})

router.post('/register' , (req , res) => {
    let userData = req.body 
    let user = new User(userData)
    user.save((error , registeredUser)=>{
        if (error){
            console.log(error)
        } else{
          let payload = {subject: registeredUser._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token: token , fullname: user.fullname})
        
        }
    })
})
// added later
router.post('/adminchannel' , (req , res) => {
  let channelData = req.body 
  let channel = new Channel(channelData)
  channel.save((error , channelAdmin)=>{
      if (error){
          console.log(error)
      } else{
        
        res.status(200).send({channelid : channel.channelid , channelname: channel.channelname})
      
      }
  })
})

router.post('/adminlogin' , (req , res) => {
  let adminData = req.body 
  
  Admin.findOne({email: adminData.email}, (error,admin)=>{
      if (error){
          console.log(error)
      } else{
          if (!admin){
              res.status(401).send('Invalid email')
          } else
          if ( admin.password !== adminData.password) {
              res.status(401).send('Invalid Password')
          } else {
            let payload = {subject: admin._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token: token , fullname: admin.fullname})
            
          }
      }
  })
})
router.get('/admincontrols', verifyToken ,(req , res) => {
  
  res.send("You got into admincontrols")
})

//

router.post('/login' , (req , res) => {
    let userData = req.body 
    
    User.findOne({email: userData.email}, (error,user)=>{
        if (error){
            console.log(error)
        } else{
            if (!user){
                res.status(401).send('Invalid email')
            } else
            if ( user.password !== userData.password) {
                res.status(401).send('Invalid Password')
            } else {
              let payload = {subject: user._id}
              let token = jwt.sign(payload, 'secretKey')
              
              res.status(200).send({token: token , fullname: user.fullname})
              
            }
        }
    })
})

router.get('/home', (req ,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]   // events is minimised, check it out
    res.json(events)
  })
  
  router.get('/homeeditor', (req , res) => {
    let specialEvents = [
      {
        "_id": "1",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ] // specialevents is minimised, check it out
    res.json(specialEvents)
  })

  router.get('/channels' , verifyToken ,(req , res) => {
    
    Channel.find({}).then(function (channels) {
      res.send(channels);
      });
    
  })

  router.post('/channels/details' , (req , res) => {
    let userData = req.body 
    let datadb = new Channel(userData)
    var query = { channelid : datadb.channelid };
    Channel.findOneAndUpdate({ channelid : datadb.channelid }, { channeldata : datadb.channeldata }, function(err , doc){
      if (err) return res.send(500 , {error : err }) ;
      return res.send("Successfully saved") ;
     })
    // datadb.save((error , registeredUser)=>{
    //     if (error){
    //         console.log(error)
    //     } else{
    //       let payload = {subject: registeredUser._id}
    //       let token = jwt.sign(payload, 'secretKey')
    //       res.status(200).send({token: token , channelid: datadb.channelid})
        
    //     }
    })


module.exports = router