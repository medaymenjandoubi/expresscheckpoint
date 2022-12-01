const express = require('express');
const date = require ('./middleware/Date');

//initialisation

const app = express();

const port = 4000;


//route with middleware
app.get('/middlware',date,(req,res)=>{
    res.send('message' + req.date)
})


//route without middleware
 app.get('/',(req,res)=>{
     res.send('you are doing well')
 })

 app.use('/static',express.static(__dirname + '/Home'))

 app.use('/static',express.static(__dirname + '/Service'))

 app.use('/static',express.static(__dirname + '/Contact'))




//  app.get('/homePage',(req,res)=>{
//      res.sendFile(__dirname + '/Home')
//  })







//link port
app.listen(port,(err)=>{
    err?console.log(err):console.log(`connected to localhost ${port}`)
})