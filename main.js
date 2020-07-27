var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "SATY Learning Node JS"
      response.end('Welcome: SATY Learning Node JS\n');
}).listen(8082);

// Console will print the message
console.log('Server running at http://localhost:8082/');