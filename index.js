// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var path = require('path');

settings = require('./settings.json'); //Contains our settings.



app.get('/world', function (req, res){
	var id = req.query.id;
	console.log(id);
	res.status(200);
	res.send(id);
})

app.use(express.static('./client/web/pages/'));

//app.use('/static', express.static(settings.web_root));

server.listen(settings.Port);
