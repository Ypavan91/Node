var fs = require("fs");

fs.readdirSync("./logs").forEach(function(fileName) {

	fs.unlinkSync("./logs/" + fileName);

});

//fs.rmdir function will remove the directory.
fs.rmdir("./logs", function(err) {

	if (err) {
		throw err;
	}

	console.log("Logs directory removed");

});