var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<H1>Welcome to</H1> Express.js');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
});
