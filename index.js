var express = require('express');
const { response } = require('express');
var router = express.Router();

/* GET home page. */
app.get('/user',(req,res)=> {
  response.end("Ini User");
})

app.post('/test',(req,res)=> {
  response.end("Test");
})

app.listen('8080', (e)=>{
  console.log(e)
})