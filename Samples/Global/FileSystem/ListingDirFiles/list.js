var fs = require("fs");

// readdirSync - read the contents of the directory synchronously with a blocking request.
// readdir - is an asynchronous command, so what it's going to do is put in a request to read the files from the library folder and when the file system is finished reading those files this call back will be invoked.

fs.readdir('./lib', function(err, files) {

	if (err) {
		throw err;
	}

	console.log(files);

});

console.log("Reading Files...");
