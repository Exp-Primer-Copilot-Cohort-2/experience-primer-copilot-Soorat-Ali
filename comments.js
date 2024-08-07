// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

// 2. Create server
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    
    // 3. Read file
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081, function () {
    console.log("Server is running at http://