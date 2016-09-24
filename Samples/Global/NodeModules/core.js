var path = require('path');
var util = require('util');
var v8 = require('v8');

//The require function is what we use to load modules.
//The path module is used to pluck the base file name or dir name from a full path.
//We can also use the path module to create path strings. The path.join function can be used to join strings together in a path.
/*The utilities module is called util. The utilities module has several helper functions that we can use. One of which is a log.
So instead of doing console logs, I can do util logs.*/

util.log( path.basename(__filename) );

var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

util.log(dirUploads);

util.log(v8.getHeapStatistics());

