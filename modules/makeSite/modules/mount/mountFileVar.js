var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');
var onlyFilePath = require('../onlyFilePath.js');
var arrFileName = require('../arrFileName.js');
var onlyFileName = require('../onlyFileName.js');
var lengthDirPath = require('../lengthDirPath.js');
var mountPath = require('./mountPath.js');


module.exports.mountFileVar = function (loadPathFile) {
	// console.log('loadPathFile:');
	// console.log(loadPathFile);
	var arrFileVar = [];
	for(var index in loadPathFile) {

		var content = fs.readFileSync(loadPathFile[index], 'utf8').toString();
		var auxOnlyFilePath = onlyFilePath.onlyFilePath(loadPathFile[index]);
		var auxArrFileName = arrFileName.arrFileName(auxOnlyFilePath);
		var auxOnlyFileName = onlyFileName.onlyFileName(auxArrFileName);
		var auxLengthtDirPath = lengthDirPath.lengthDirPath(auxArrFileName);
		var auxOnlyDirPath = mountPath.mountPath(auxArrFileName, auxLengthtDirPath);
		// var auxMountPathTemplate = mountPathTemplate(auxArrFileName, auxLenghtArrFileName);
		// Json var
		arrFileVar[auxOnlyFileName] = [];
		arrFileVar[auxOnlyFileName]['content'] = content;
		arrFileVar[auxOnlyFileName]['filePath'] = loadPathFile[index];
		arrFileVar[auxOnlyFileName]['auxOnlyFilePath'] = auxOnlyFilePath;
		arrFileVar[auxOnlyFileName]['auxArrFileName'] = auxArrFileName;
		arrFileVar[auxOnlyFileName]['auxOnlyFileName'] = auxOnlyFileName;
		arrFileVar[auxOnlyFileName]['auxOnlyDirPath'] = auxOnlyDirPath;
		// return arrFileVar;
	}
	// console.log('arrFileVar:');
	// console.log(arrFileVar);
	return arrFileVar;
};
