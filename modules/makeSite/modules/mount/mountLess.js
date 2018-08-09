var fs = require('fs');
var path = require('path');
var less = require('less');
var recursiveReadSync = require('recursive-readdir-sync');
var mkDir = require('../../../../lib/mkDir.js');

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
	less.render(fileVar.content, options)
	// less.render("@background: #000; body{}", options)
	    .then(function(output) {
	        // output.css = string of css
	        // output.map = string of sourcemap
	        // output.imports = array of string filenames of the imports referenced
			console.log('less:');
			console.log(output);
			mkDir.mkDir(fileVar.auxOnlyDirPath);
			fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName + '.css', output.css);
	    },
	    function(error) {
			console.log(error);
	    });

		less.logger.addListener({
		    debug: function(msg) {
		    },
		    info: function(msg) {
		    },
		    warn: function(msg) {
		    },
		    error: function(msg) {
		    }
		});

};
