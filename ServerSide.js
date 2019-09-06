// by Jadson Marliere de Oliveira
// exec> node ServerSide.js


var http = require('http'); // name of the module/library
var dt = require('./myModule'); // include a module file
var url = require('url')

//create a server object
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'})// return a response to the client , 200 -> all is OK, 2argument-> response headers
	
	res.write("A data e o horario hoje: " + dt.myDateTime()); // module function
	
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	
	res.write(req.url)
	
	res.end(txt)
	res.end('Teste Server Node JS ') //end the response
}).listen(8080); // listen port 8080