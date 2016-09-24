var EventEmitter = require('events').EventEmitter;
var util = require('util');

/*The EventEmitter is a part of the Events module & it is a Node.js's implementation of the pub/sub design pattern,
and it allows us to create listeners for an emit custom Events.*/

var Person = function(name) {
	this.name = name;
};

// The utilities module has a inherits function, and it's a way that we can add a object to the prototype of an existing object.
util.inherits(Person, EventEmitter);

var Pavan = new Person("Pavan Kumar");

Pavan.on('speak', function(said) {

	console.log(`${this.name}: ${said}`);

});


Pavan.emit('speak', "Welcome to EventEmitters");

/*
The EventEmitter provides us a way to create custom objects that raise custom events that can be handled asynchronously
because the events are handled asynchronously, it is a very important tool in node.js. */
