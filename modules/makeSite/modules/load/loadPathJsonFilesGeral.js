var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');

module.exports = function () {
    var fileNames = recursiveReadSync('./src/').filter(function(fileName) {
        return ((path.extname(fileName) === '.json') && (fileName.search('partial') == -1));
    });
    return fileNames;
};
