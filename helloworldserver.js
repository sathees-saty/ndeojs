var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "below"
   response.end('SATY Learning Node JS \n');
}).listen(8082);

// Console will print the message
console.log('Server running at http://172.17.78.145:8082/');