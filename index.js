const path = require('path')
const express = require('express')

settings = require('./settings.json')

const app = express()

const port = 8080

app.get('/world', function (req, res){
	var id = req.query.id;
	console.log(id);
})

app.get('/', (req, res) => {  
  res.send("Ello");
})

app.listen(port)