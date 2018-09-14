var fs = require('fs-extra');
var path = require('path');
var less = require('less');
var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../lib/mkDir.js');
const util = require('util');

module.exports.mountLess = function (fileVar) {
	var options = { env: 'production' };
	// var result = less.render(fileVar.content, options, function(error, output) {
	// 	console.log(fileVar.content);
	// 	console.log('error');
	// 	console.log(error);
	// 	console.log('output');
	// 	console.log(output);
	// });
	// console.log('content:'+fileVar.content.toString());


	async function fn() {
		return new Promise((resolve, reject) => {
		less.render(fileVar.content, options, function(error, output) {
			// less.render(fileVar.content, options)
			// less.render("@background: #000; body{}", options)
			// .then(function(output) {
			// output.css = string of css
			// output.map = string of sourcemap
			// output.imports = array of string filenames of the imports referenced
			// return new Promise((resolve, reject) => {
				console.log('less mountLess.js:', fileVar.filePath);
				// console.log(output);
				mkDir.mkDir(fileVar.auxOnlyDirPath);
				fileVar.auxOnlyFileName = fileVar.auxOnlyFileName.replace('less', 'css');
				fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName, output.css);

				// },
				// function(error) {
				if (error) {
					console.log('error:',error);
					// reject(error);
				}

				// resolve('less ok');
				resolve('output');
			});
			// resolve('less ok');
		});
	}

	less.logger.addListener({
		debug: function(msg) {
			console.log('msg:', msg);
		},
		info: function(msg) {
			console.log('msg:', msg);
		},
		warn: function(msg) {
			console.log('msg:', msg);
		},
		error: function(msg) {
			console.log('msg:', msg);
		}
	});

	const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log('callback LESS:', ret);
});

};
