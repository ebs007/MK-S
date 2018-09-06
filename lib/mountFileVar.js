var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');
var onlyFilePath = require('./onlyFilePath.js');
var arrFileName = require('./arrFileName.js');
var onlyFileName = require('./onlyFileName.js');
var onlyExtension = require('./onlyExtension.js');
var lengthDirPath = require('./lengthDirPath.js');
var mountPath = require('./mountPath.js');


module.exports.mountFileVar = function (loadPathFile) {
	// console.log('loadPathFile:',loadPathFile);
	// console.log(loadPathFile);
	var arrFileVar = [];
	for (var i = 0; i <= loadPathFile.length-1; i++) {
	// 	array[i]
	// }
	// for(var index in loadPathFile) {

		var content = fs.readFileSync(loadPathFile[i], 'utf8').toString();
		// var auxOnlyFilePath = onlyFilePath.onlyFilePath(loadPathFile[index]);
		var auxArrFileName = arrFileName.arrFileName(loadPathFile[i]);
		var auxOnlyFileName = onlyFileName.onlyFileName(auxArrFileName);
		// var auxOnlyExtension = onlyExtension.onlyExtension(auxOnlyFilePath);
		var auxLengthtDirPath = lengthDirPath.lengthDirPath(auxArrFileName);
		var auxOnlyDirPath = mountPath.mountPath(auxArrFileName, auxLengthtDirPath);
		// var auxMountPathTemplate = mountPathTemplate(auxArrFileName, auxLenghtArrFileName);
		// Json var
		arrFileVar[i] = [];
		arrFileVar[i]['content'] = content;
		arrFileVar[i]['filePath'] = loadPathFile[i];
		// arrFileVar[auxOnlyFileName]['auxOnlyFilePath'] = auxOnlyFilePath;
		arrFileVar[i]['auxArrFileName'] = auxArrFileName;
		arrFileVar[i]['auxOnlyFileName'] = auxOnlyFileName;
		// arrFileVar[auxOnlyFileName]['auxOnlyExtension'] = auxOnlyExtension;
		arrFileVar[i]['auxOnlyDirPath'] = auxOnlyDirPath;
		// return arrFileVar;
	}
	// console.log('arrFileVar:');
	// console.log(arrFileVar);
	return arrFileVar;
};
