var fs = require('fs');

fs.unlink('myNewFile2.txt', function(err){
	if(err) throw err;
	console.log('File Deleted');
});