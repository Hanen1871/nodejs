const http = require("http")
const url = require("url")
const fs = require("fs")

function main(request, response) {
     response.end("HELLO WORLD")
     const pathname = url.parse(request.url, true).pathname; 
    if (pathname === "localhost") response.end("Hello Node")
    
     fs.readFile("welcome.txt", (err, result) => response.end(result))
    }
console.log("HELLO WORLD") 
const server = http.createServer(main)
server.listen(3000)
console.log("listening on port 3000") 



var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true,
    symbols: true

});   

console.log(password);
