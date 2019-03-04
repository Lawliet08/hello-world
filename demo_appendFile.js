var fs = require('fs');

fs.appendFile('myNewFile1.txt','Hello Content', function(err){
	if(err) throw err;
	console.log('Saved');
});