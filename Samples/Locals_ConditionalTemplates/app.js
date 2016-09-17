var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.locals.pagetitle = "KBR IT Corporation";

app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Pavan', 'Judy', 'James'],
    content: 'Welcome to KBR IT Corporation.'
  });
});

app.get('/about', function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about',
    content: 'KBR IT Corporation is an leading award-winning Information Technology Services Company.'
  });

});

app.get('*', function(req, res) {
  res.send('Bad Route');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
}); 