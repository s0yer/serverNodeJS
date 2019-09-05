// exec> node ServerSide.js

//create my own module
exports.myDateTime = function(){
	return Date();
	
};

var http = require('http'); // name of the module/library
var dt = require('./myModule');

http.createServer(function(req, res){
	res.writeHead(300, {'Content-Type': 'text/html'})
	res.write("A data e o horários agora são: " + dt.myDateTime());
	res.end('Teste Server Node JS ')
}).listen(8080); // hear port 8080