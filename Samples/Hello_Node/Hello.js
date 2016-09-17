var http = require('http'); //add the http module
var myServer = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<b>Hello_Node</b> World");
    response.end();
}); //create a server

myServer.listen(3000);

console.log("Go to http://localhost:3000 on your browser");/**
 * Created by Pauwan on 9/16/2016.
 */
