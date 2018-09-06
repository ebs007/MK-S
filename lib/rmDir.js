var fs = require('fs');
var path = require('path');
var rmDir = require('./rmDir.js');

module.exports.rmDir = function(dir) {
// var auxPath = new Array(path);
	// if( fs.existsSync(path) ) {
	var list = fs.readdirSync(dir);
// console.log(path);
	if(list instanceof Array && list.length){
		// not empty
		//// console.log('not empty');
		//// console.log(list);
	} else {
		// empty
		//// console.log('empty');
		//// console.log(list);
	}

	for(var i = 0; i < list.length; i++) {
		var filename = path.join(dir, list[i]);
		////console.log('To remove: ' + filename);

		var stat = fs.statSync(filename);

		//if(filename == "." || filename == "..") {
			// pass these files
		if(!stat.isDirectory()) {
			// rmdir recursively
			// rmDir.rmDir(filename);

			fs.unlinkSync(filename);
		} else {
			rmDir.rmDir(filename);
			// fs.rmdirSync(filename);
		}
	}
	try {
	fs.rmdirSync(dir);
} catch(err){
  if(err.code === 'ENOTEMPTY'){
	console.log('directory not empty:', dir);
  } else {
	  console.log(err);
	//something unrelated went wrong, rethrow
	throw err;
  }
}
	// }

	// try {
	// 	var list = fs.readdirSync(dir);
	// 	for(var i = 0; i < list.length; i++) {
	// 		var filename = path.join(dir, list[i]);
	// 		var stat = fs.statSync(filename);
	//
	// 		if(filename == "." || filename == "..") {
	// 			// pass these files
	// 		} else if(stat.isDirectory()) {
	// 			// rmdir recursively
	// 			rmDir.rmDir(filename);
	// 		} else {
	// 			// rm fiilename
	// 			fs.unlinkSync(filename);
	// 		}
	// 	}
	// 	fs.rmdirSync(dir);
	// } catch (err) {
	// 	if (err.code === 'ENOENT') {
	// 		console.log('Directory not found!');
	// 	} else {
	// 		throw err;
	// 	}
	// }

	// if(list instanceof Array && list.length){
	// 	// not empty
	// 	console.log('not empty');
	// } else {
	// 	// empty
	// 	console.log('empty');
	// }

};
