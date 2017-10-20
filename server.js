var http = require("http"); 
var fs = require("fs"); 

var PORT = 3000; 

// creating the server 
var server = http.createServer(handleRequest); 
// handling the requests coming in 
function handleRequest(req, res) {   
// fs package to read our index.html file   
	fs.readFile(__dirname + "/home.html", function(err, data) {     
	// respond to client with an HTML page telling the browser that we are delivering
	    res.writeHead(200, { "Content-Type": "text/html" });     
	    res.end(data);   
	}); 
} 
// server start
server.listen(PORT, function() {   
	console.log("Server is listening on PORT: " + PORT); 
});

