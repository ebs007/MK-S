var fs = require('fs-extra');
var path = require('path');
var sass = require('node-sass');
var baser = require('base64-css');
// var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');

// const util = require('util');

module.exports.mountSass = async function (fileVar) {
	const srcPath = path.join(process.cwd(), fileVar.filePath);
	const dstPath = path.join(process.cwd(), fileVar.auxOnlyDirPath);
	var resultB64;



	try {

		var options = {};
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
		// const srcPath = path.join(process.cwd(), fileVar.filePath);
		// console.log('srcPath:', srcPath);
		// await less.render(result, options, function(error, output) {

		var result = await sass.renderSync({
			// console.log('result scss:', scss);
			file: srcPath,
			data: fileVar.content,
			outputStyle: 'nested',
			// outFile: fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName,
			sourceMap: true, // or an absolute or relative (to outFile) path
			// importer: function(url, prev, done) {
			// 	// url is the path in import as is, which LibSass encountered.
			// 	// prev is the previously resolved path.
			// 	// done is an optional callback, either consume it or return value synchronously.
			// 	// this.options contains this options hash
			// 	someAsyncFunction(url, prev, function(result){
			// 		done({
			// 			file: result.path, // only one of them is required, see section Special Behaviours.
			// 			contents: result.data
			// 		});
			// 	});
			// 	// OR
			// 	var result = someAsyncFunction(url, prev);
			// 	return {file: result.path, contents: result.data};
			// }
		});

		console.log('Sass created: ', srcPath);

		// console.log(result);
		// console.log(result.css);
		// console.log(result.map);
		// console.log(result.stats);

	} catch(err) {
		console.log('Sass error: ', err);
		// Handle error
	}

	try {

		mkDir.mkDir(fileVar.auxOnlyDirPath);
		fileVar.auxOnlyFileName = fileVar.auxOnlyFileName.replace('scss', 'css');
		fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, result.css);

		console.log('Sass copied: ',fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName);

	} catch(err) {
		console.log('Error to be create Sass: ', err);
		// Handle error
	}

// await mountBase64.mountBase64(fileVar);

};
