var loadPath = require('../../../lib/loadPath.js');
var mountFileVar = require('../../../lib/mountFileVar.js');
var mountSass = require('../modules/mountSass.js');
var fs = require('fs-extra');
var path = require('path');

var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');
const util = require('util');

module.exports.sass = async function() {
	var result = null;
	var auxLoadPath = loadPath.loadPath(
		'./src/',
		['.scss']
	);
	var auxMountFileVar = mountFileVar.mountFileVar(auxLoadPath);
	// console.log(auxMountFileVar);
	// return new Promise((resolve, reject) => {
	// (async () => {
	for (var i = 0; i <= auxMountFileVar.length-1; i++) {
		await mountSass.mountSass(auxMountFileVar[i]);
		// result = auxMountFileVar[i].content.toString();
		// console.log('auxMountFileVar[i]:', auxMountFileVar[i].filePath);
		//
		//
		//
		//
		//
		//
		// var options = {};
		// var result = less.render(fileVar.content, options, function(error, output) {
		// 	console.log(fileVar.content);
		// 	console.log('error');
		// 	console.log(error);
		// 	console.log('output');
		// 	console.log(output);
		// });
		// console.log('content:'+fileVar.content.toString());


		// (async () => {
		// console.log(result);
		// const srcPath = path.join(process.cwd(), auxMountFileVar[i].filePath);
		// console.log('srcPath:', srcPath);
		// await less.render(result, options, function(error, output) {
// 		const srcPath = path.join(process.cwd(), auxMountFileVar[i].filePath);
// 		const dstPath = path.join(process.cwd(), auxMountFileVar[i].auxOnlyDirPath);
// 		var result = sass.renderSync({
// 				// console.log('result scss:', scss);
// 				file: srcPath,
// 				data: auxMountFileVar[i].content,
// 				outputStyle: 'nested',
// 				// outFile: auxMountFileVar[i].auxOnlyDirPath + auxMountFileVar[i].auxOnlyFileName,
// 				sourceMap: true, // or an absolute or relative (to outFile) path
// 				// importer: function(url, prev, done) {
// 				// 	// url is the path in import as is, which LibSass encountered.
// 				// 	// prev is the previously resolved path.
// 				// 	// done is an optional callback, either consume it or return value synchronously.
// 				// 	// this.options contains this options hash
// 				// 	someAsyncFunction(url, prev, function(result){
// 				// 		done({
// 				// 			file: result.path, // only one of them is required, see section Special Behaviours.
// 				// 			contents: result.data
// 				// 		});
// 				// 	});
// 				// 	// OR
// 				// 	var result = someAsyncFunction(url, prev);
// 				// 	return {file: result.path, contents: result.data};
// 				// }
// 			});
//
// 		console.log(result);
// 			console.log(result.css);
// 			console.log(result.map);
// 			console.log(result.stats);
//
// 			mkDir.mkDir(auxMountFileVar[i].auxOnlyDirPath);
// 			auxMountFileVar[i].auxOnlyFileName = auxMountFileVar[i].auxOnlyFileName.replace('scss', 'css');
// 			fs.writeFileSync(auxMountFileVar[i].auxOnlyDirPath + auxMountFileVar[i].auxOnlyFileName, result.css);
//
//
//
//
//
//
//
// console.log('dir:',dstPath + auxMountFileVar[i].auxOnlyFileName);







		// sass.render({
		// 	file: srcPath,
		// 	data: auxMountFileVar[i].content,
		// 	// outFile: dstPath + auxMountFileVar[i].auxOnlyFileName,
		// 	// importer: function(url, prev, done) {
		// 	//   // url is the path in import as is, which LibSass encountered.
		// 	//   // prev is the previously resolved path.
		// 	//   // done is an optional callback, either consume it or return value synchronously.
		// 	//   // this.options contains this options hash, this.callback contains the node-style callback
		// 	//   someAsyncFunction(url, prev, function(result){
		// 	//     done({
		// 	//       file: result.path, // only one of them is required, see section Special Behaviours.
		// 	//       contents: result.data
		// 	//     });
		// 	//   });
		// 	//   // OR
		// 	//   var result = someSyncFunction(url, prev);
		// 	//   return {file: result.path, contents: result.data};
		// 	// },
		// 	includePaths: [ 'lib/', 'mod/' ],
		// 	outputStyle: 'expanded'
		// }, function(error, result) { // node-style callback from v3.0.0 onwards
		// 	if (error) {
		// 		console.log('error status: ', error.status); // used to be "code" in v2x and below
		// 		console.log('error column: ', error.column);
		// 		console.log('error message: ', error.message);
		// 		console.log('error line: ', error.line);
		// 	} else {
		// 		console.log('auxMountFileVar[i]:',auxMountFileVar[i]);
		// 		// fs.writeFileSync(auxMountFileVar[i].auxOnlyDirPath + auxMountFileVar[i].auxOnlyFileName, result.css.toString());
		// 		console.log(result.css.toString());
		//
		// 		console.log(result.stats);
		//
		// 		// console.log(result.map.toString());
		// 		// or better
		// 		// console.log(JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
		// 	}
		// });










		// return new Promise((resolve, reject) => {
		// less.render(auxMountFileVar[i].content, options)
		// less.render("@background: #000; body{}", options)
		// .then(function(output) {
		// output.css = string of css
		// output.map = string of sourcemap
		// output.imports = array of string filenames of the imports referenced
		// return new Promise((resolve, reject) => {
		// console.log('less mountSass.js:', auxMountFileVar[i]);
		// console.log(output);
		// mkDir.mkDir(auxMountFileVar[i].auxOnlyDirPath);
		// auxMountFileVar[i].auxOnlyFileName = auxMountFileVar[i].auxOnlyFileName.replace('less', 'css');
		// fs.writeFileSync(auxMountFileVar[i].auxOnlyDirPath + auxMountFileVar[i].auxOnlyFileName, output.css);

		// },
		// function(error) {
		// if (error) {
		// console.log('error:',error);
		// reject(error);
		// }

		// resolve('less ok');
		// resolve(output);
		// });
		// resolve('less ok');
		// });
		// })(auxMountFileVar[i]);



		// const callbackFunction = util.callbackify(fn);
		//
		// callbackFunction((err, ret) => {
		// if (err) throw err;
		// console.log('callback LESS:', ret);
		// });









	}
	// })();
	// if(result != null || result != undefined)
	// reject('less error');
	// else
	// resolve('less ok');
	// });
};

// var lessTest = require('./Sass.js');
// lessTest.less();
