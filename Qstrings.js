// query strings test nodeJS

var http = require('http'); // name of the module/library http
var url = require('url'); // include a URL module
var dt = require('./myModule'); // include a module file

http.createServer(function(req, res){

	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(txt);
	
}).listen(60300); // listen port 60300