// app.js
var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

settings = require('../../settings.json');Contains our settings.

app.get('/world', function (req, res){
	var id = req.query.id;
	console.log(id);
	res.status(200);
	res.send(id);
})

app.get('/', (req, res) => {  
	res.status(200);
	res.send("Ello");
})

server.listen(settings.Port);

