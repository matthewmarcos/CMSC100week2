var express = require('express');
var app = express();

app.use(require('body-parser')());
app.use(require('method-override')());

app.use(express.static(__dirname + '/public')); 
app.use(require(__dirname + '/config/router')(express.Router()));

var server = app.listen(5000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("index.js is listening at " + host + " at " + port);
});


