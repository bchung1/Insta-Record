var express = require('express')
var app = express()
var path = require('path')
var http = require('http').Server(app);

// Initalize Firebase
// var config = {
//     apiKey: "AIzaSyCbVOgsRXntXxz5Y73oehWRkz8_oKD7XVs",
//     authDomain: "warc-d335d.firebaseapp.com",
//     databaseURL: "https://warc-d335d.firebaseio.com",
//     storageBucket: "warc-d335d.appspot.com",
//     messagingSenderId: "1090986097926"
// };
// firebase.initializeApp(config);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/record', function(req, res){
	//Get Medical Record
})

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
