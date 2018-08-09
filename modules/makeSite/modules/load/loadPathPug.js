// var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');

module.exports.loadPathPug = function () {
	var fileNames = recursiveReadSync('./src/').filter(function(fileName) {
		return (path.extname(fileName) === '.pug');
	});
	return fileNames;
};
