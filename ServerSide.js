// by Jadson Marliere de Oliveira
// exec> node ServerSide.js

var http = require('http'); // name of the module/library http
var dt = require('./myModule'); // include a module file
var url = require('url'); // include a URL module
var fs = require('fs'); // File System Module, upload files

var adr = 'http://localhost:8080/default.htm?year=2019&month=september';
var q = url.parse(adr, true);

var uc = require('upper-case'); //npm install upper-case

var formidable = require('formidable'); //npm install formidable -> work with file uploads

var events = require('events'); // built-in module -> you can fire, create, listen for your own events
var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventHandler = function(){
	console.log('Lets do it!');
}
// assign the event handler to an event
eventEmitter.on('do', myEventHandler);
//fire the event -> do
eventEmitter.emit('do');

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); // returns '?year=2019&month=september'
var qdata = q.query; // returns an object: { year: 2019, month: 'september'}
console.log(qdata.month); // returns 'september'

//create a server object
http.createServer(function(req, res){
	
	var q = url.parse(req.url, true);
	var filename = "."  + q.pathname;

	fs.readFile('demoFile.html', function(err, data){ // read files -> html files
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Não encontrado!!!")
			
		}
		res.writeHead(200, {'Content-Type': 'text/html'});// return a response to the client , 200 -> all is OK, 2argument-> response headers
		res.write(data);
		res.write(uc("A data e o horario hoje: " + dt.myDateTime())); // module function
		res.end('Teste Server Node JS '); //end the response
		
	});
}).listen(8080); // listen port 8080

