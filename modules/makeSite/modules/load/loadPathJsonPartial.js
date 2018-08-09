var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');

module.exports = function () {
    var partialFileNames = recursiveReadSync('./src/')
    .filter(function(fileName) {
        return fileName.search('partial') != -1;
    });
    return partialFileNames;
};
