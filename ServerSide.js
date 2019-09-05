var http = require('http')

// escuta porta 8080
http.createServer(function(req, res){
	res.writeHead(300, {'Content-Type': 'text/html'})
	res.end('Teste Server Node JS ')
}).listen(8080);