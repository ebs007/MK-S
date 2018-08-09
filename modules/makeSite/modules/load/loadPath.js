// var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');

module.exports.loadPath = function (extension) {
	var fileNames = recursiveReadSync('./src/').filter(function(fileName) {
		return (path.extname(fileName) === extension);
	});
	return fileNames;
};
