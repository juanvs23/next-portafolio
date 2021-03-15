const express = require ('express'),
      app = express(),
      cors = require('cors'),
      nodemailer = require('nodemailer'),
      routes=require('./routes/index'),
      bodyParser=require('body-parser')
      path =require('path');

require('dotenv').config()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/',routes())

app.listen('3001',()=>{console.log('Server working on  port 3001')})