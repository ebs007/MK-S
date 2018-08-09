module.exports = function (loadPathJsonFilesGeral) {

    // console.log('loadPathJsonFilesGeral:'+loadPathJsonFilesGeral);

    var gulp = require('gulp');
    var fs = require('fs');
    var path = require('path');
    var recursiveReadSync = require('recursive-readdir-sync');
    // Require app landing page mount json modules

    var arrFileName = require('../arrFileName.js');
    var paramFileName = require('../paramFileName.js');
    var arrParamFileName = require('../arrParamFileName.js');
    var arrParamFileNameLength = require('../arrParamFileNameLength.js');
    var lenghtArrFileName = require('../lenghtArrFileName.js');
    var lenghtArrFileNameSearch = require('../lenghtArrFileNameSearch.js');
    var mountPathTemplate = require('./mountPathTemplate.js');
    var mountJsonVar = [];

    var result = loadPathJsonFilesGeral.map(function(filePath) {
        // console.log('filePathLoad:'+filePath);
// mountJsonVar['teste'] = filePath;
var onlyFileName = require('../onlyFileName.js');
        var auxOnlyFileName = onlyFileName(filePath);
        var auxArrFileName = arrFileName(auxOnlyFileName);
        var auxParamFileName = paramFileName(auxArrFileName);
        var auxArrParamFileName = arrParamFileName(auxParamFileName);
        var auxArrParamFileNameLength = arrParamFileNameLength(auxArrParamFileName);
        var auxLenghtArrFileName = lenghtArrFileName(auxArrFileName);
        var auxLenghtArrFileNameSearch = lenghtArrFileNameSearch(auxArrFileName);
        var auxMountPathTemplate = mountPathTemplate(auxArrFileName, auxLenghtArrFileName);
        var auxMountPathTemplateSearch = mountPathTemplate(auxArrFileName, auxLenghtArrFileNameSearch);
        // Json var
        mountJsonVar[auxParamFileName] = [];
        mountJsonVar[auxParamFileName]['auxOnlyFileName'] = auxOnlyFileName;
        mountJsonVar[auxParamFileName]['auxArrFileName'] = auxArrFileName;
        mountJsonVar[auxParamFileName]['auxDupParamFileName'] = auxParamFileName;
        mountJsonVar[auxParamFileName]['auxArrParamFileName'] = auxArrParamFileName;
        mountJsonVar[auxParamFileName]['auxArrParamFileNameLength'] = auxArrParamFileNameLength;
        mountJsonVar[auxParamFileName]['auxLenghtArrFileName'] = auxLenghtArrFileName;
        mountJsonVar[auxParamFileName]['auxLenghtArrFileNameSearch'] = auxLenghtArrFileNameSearch;
        mountJsonVar[auxParamFileName]['auxMountPathTemplate'] = auxMountPathTemplate;
        mountJsonVar[auxParamFileName]['auxMountPathTemplateSearch'] = auxMountPathTemplateSearch;
        // Template var
        mountJsonVar[auxParamFileName]['name'] = auxArrParamFileName[0];
        mountJsonVar[auxParamFileName]['campaignLanguage'] = auxArrParamFileName[1];
        mountJsonVar[auxParamFileName]['campaignReferrer'] = auxArrParamFileName[2];
        mountJsonVar[auxParamFileName]['whiteOrBlack'] = auxArrParamFileName[3];
        mountJsonVar[auxParamFileName]['campaignType'] = auxArrParamFileName[4];
        mountJsonVar[auxParamFileName]['campaignAdvetisingNumber'] = auxArrParamFileName[5];
        mountJsonVar[auxParamFileName]['A_BCampaign'] = auxArrParamFileName[6];
        return mountJsonVar;
    });
    return result;
};
