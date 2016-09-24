var fs = require("fs");

//fs.exists is used to see if the directory exists before we try to create it, because creating an existing directory will throw an error.
if (fs.existsSync("lib")) {
	console.log("Directory already there");
} else {

	//Fs.mkdir will make a directory. We could do this synchronously or asynchronously.
	fs.mkdir("lib", function(err) {

		if (err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}

	});

}

