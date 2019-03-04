var http = require('http');
var fs= require('fs');
var formidable = require('formidable');

http.createServer(function(req,res){
	if(req.url=="/registration.html"){
		fs.readFile("registration.html", function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
		});
	}else{
		fs.readFile("index.html", function(err,data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
		});	
	}
	
}).listen(8080);