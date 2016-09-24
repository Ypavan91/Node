/*** Created by Pavan on 9/23/2016.*/
var Person = require("./lib/Person");

var pavan = new Person("Pavan kumar");
var david = new Person("David rocher");


pavan.on('speak', function(said) {

    console.log(`${this.name} -> ${said}`);

});

david.on('speak', function(said) {

    console.log(`${this.name}: ${said}`);

});

pavan.emit('speak', "You may delay, but time will not.");
david.emit('speak', "It is far better to be alone, than to be in bad company.");
