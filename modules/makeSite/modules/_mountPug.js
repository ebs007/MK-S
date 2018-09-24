var fs = require('fs');
var path = require('path');
var pug = require('pug');
var merge = require('merge');
var recursiveReadSync = require('recursive-readdir-sync');
var mkdir = require('../../../../lib/mkDirByPathSync.js');

module.exports.mountPug = function (fileVar) {
	console.log('teste');
	var html = pug.renderFile(fileVar.filePath);
	console.log(html);
	mkdir(fileVar.auxOnlyDirPath);
	fs.writeFileSync(fileVar.auxOnlyDirPath + fileVar.auxOnlyFileName + '.html', html);
};
