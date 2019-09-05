// exec> node ServerSide.js


var http = require('http'); // name of the module/library
var dt = require('./myModule'); // include a module file

http.createServer(function(req, res){
	res.writeHead(300, {'Content-Type': 'text/html'})
	res.write("A data e o horario hoje: " + dt.myDateTime()); // module function
	res.end('Teste Server Node JS ')
}).listen(8080); // hear port 8080