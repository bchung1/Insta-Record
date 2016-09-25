var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var currID ='';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/record', function(req, res){
	res.sendFile(__dirname + '/public/record.html');
});

app.get('/getID', function(req, res){
	res.send({id: currID})
})

app.post('/postID', function(req, res){
	currID = req.body.id;
	res.send({redirect: '/record'});
})

http.listen(3000, function(){
	console.log('listening on *:3000');
});
