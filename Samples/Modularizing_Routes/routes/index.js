exports.index = function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Pavan', 'Judy', 'James'],
    content: 'Welcome to KBR IT Corporation.'
  });
}

exports.about = function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about',
    content: 'KBR IT Corporation is an leading award-winning Information Technology Services Company.'
  });
}
