const express = require('express');
const mongoose = require('mongoose');
const Video = require('./models/video');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "exp://172.16.5.4:19000");
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:19006");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });  

// connect to mongoDB
const dbURI = 'mongodb+srv://testUser:test123@cluster0.xxvgctg.mongodb.net/TestDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
      console.log('db connected');
      app.listen(3000);
    })
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    Video.findById('643087c450b0184f50345fa5')
        .then((result) =>  {
          res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
});

app.get('/user_videos', (req, res) => {
  Video.find()
      .then((result) =>  {
        console.log('results', result);
        res.send(result);
      })
      .catch(err => {
          console.log(err);
      })
});