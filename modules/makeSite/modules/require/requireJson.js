var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');
// Require app landing page mount json modules
var onlyFileName = require('./modules/onlyFileName.js');
var arrFileName = require('./modules/arrFileName.js');
var paramFileName = require('./modules/paramFileName.js');
var arrParamFileName = require('./modules/arrParamFileName.js');
var arrParamFileNameLength = require('./modules/arrParamFileNameLength.js');
var lenghtArrFileName = require('./modules/lenghtArrFileName.js');
var lenghtArrFileNameSearch = require('./modules/lenghtArrFileNameSearch.js');
var templateName = require('./modules/templateName.js');
var mountPathTemplate = require('./modules/mountPathTemplate.js');

module.exports = function (loadPathJsonFilesGeral) {
    auxJsons = {};
    loadPathJsonFilesGeral.reduce(function(jsons, filePath, currentIndex) {

each(function(index, el) {
    
});


        var auxOnlyFileName = onlyFileName(filePath);
        var auxArrFileName = arrFileName(auxOnlyFileName);
        var auxParamFileName = paramFileName(auxArrFileName);
        var auxArrParamFileName = arrParamFileName(auxParamFileName);
        var auxArrParamFileNameLength = arrParamFileNameLength(auxArrParamFileName);
        var auxLenghtArrFileName = lenghtArrFileName(auxArrFileName);
        var auxLenghtArrFileNameSearch = lenghtArrFileNameSearch(auxArrFileName);
        var auxTemplateName = templateName(auxArrFileName);
        var auxMountPathTemplate = mountPathTemplate(auxArrFileName, auxLenghtArrFileName);
        auxJsons[auxParamFileName] = require('../../' + auxMountPathTemplate + 'json/' + auxParamFileName + '.json');
    });
    return auxJsons;
};
