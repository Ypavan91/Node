var fs = require("fs");

fs.readdirSync("./list").forEach(function(fileName) {

	fs.unlinkSync("./list/" + fileName);

});

//fs.rmdir function will remove the directory.
fs.rmdir("./list", function(err) {

	if (err) {
		throw err;
	}

	console.log("List directory removed");

});