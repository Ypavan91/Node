/**
 * Created by Pauwan on 9/16/2016.
 */
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
        content: 'Welcome to new world!'
    });
});

app.get('/about', function(req, res) {
    res.render('default', {
        title: 'About Us',
        classname: 'about',
        content: 'I am a web developer, like to develop web pages.'
    });

});

app.get('*', function(req, res) {
    res.send('Bad Route');
});

var server = app.listen(3000, function() {
    console.log('Listening on port 3000');
}); 