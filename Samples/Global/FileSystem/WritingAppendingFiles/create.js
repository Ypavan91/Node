var fs = require("fs");

// The .fs module will give us the ability to append content to existing files, or create new files and add content to our newly-created file as well. 
var md = `

Sample Markdown Title
=====================

Sample subtitle
----------------

* point
* point
* point

`;

fs.writeFile("sample.md", md.trim(), function(err) {

	console.log("File Created");

});