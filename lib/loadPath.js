// var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');
var checkExist = require('./checkExist.js');
var mkDir = require('./mkDir.js');

module.exports.loadPath = function (rootDir, arrExtensions) {
	console.log('rootDir:', rootDir);

// TESTE BELOW
	// try {
	// 	if(checkExist.checkExist(rootDir)) {
	// 		console.log('exist teste 1');
	// 		// rmDir.rmDir('./build');
	// 	} else {
	// 		console.log('not exist test 1');
	//
	//
	//
	// 	}
	// 	var files = recursiveReadSync(rootDir);
	// 	// console.log('Files array:', files);
	//
	// 	//loop over resulting files
	// 	for(var i = 0, len = files.length; i < len; i++){
	// 		console.log('Found: %s', files[i]);
	// 	}
	// } catch(err){
	// 	if(err.code === 'ENOENT'){
	// 		// console.log(err);
	// 		console.log('Path does not exist');
	// 	} else if(err.code === 'EPERM'){
	// 		// console.log(err);
	// 		console.log('Operation not permitted, the file or directory are open in some place.');
	// 	} else {
	// 		console.log(err);
	// 		//something unrelated went wrong, rethrow
	// 		throw err;
	// 	}
	// }


	try {


		var fileNames = recursiveReadSync(rootDir).filter(function(fileName) {
			// console.log('rootDir:', rootDir);
			//// console.log('loadpath:', fileName);
			//// console.log('fileName:', path.extname(fileName));
			// console.log(arrExtensions.indexOf(path.extname(fileName)) > -1);
			return arrExtensions.indexOf(path.extname(fileName)) > -1;
			// fs.copySync(path.extname(fileName), './build/');
		// }
		});
		console.log('fileNames');
		console.log(fileNames);
		return fileNames;
	} catch(err){
		if(err.code === 'ENOENT'){
			// console.log(err);
			console.log('Path does not exist');
		} else if(err.code === 'EPERM'){
			// console.log(err);
			console.log('Operation not permitted, the file or directory are open in some place.');
		} else {
			console.log(err);
			//something unrelated went wrong, rethrow
			throw err;
		}
	}
};
