var http = require('http');
var uc = require('upper-case');

http.createServer(function(req,res){
	console.log(uc('server created'));
}).listen(8080);