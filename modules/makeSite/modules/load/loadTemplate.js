var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');

module.exports = function () {
    var fileNames = recursiveReadSync('./src/templates/').filter(function(fileName) {
        return ((path.extname(fileName) === '.hbs') && (fileName.search('partial') == -1));
    });
    return fileNames;
};
