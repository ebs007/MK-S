module.exports = function (jsonVar, jsonVarId, newCampaign) {
    console.log('Mount:');
    console.log('jsonVarId:'+jsonVarId);
    console.log(jsonVar[jsonVarId]);
    // console.log(auxDupParamFileName);
    var paramFile = '';

    if(jsonVar.campaignReferrer != '')
    jsonVar.campaignReferrer = newCampaign;

    for (var param = 1; param < jsonVar.auxDupParamFileName.length; param++) {
        paramFile += '-' + jsonVar.auxDupParamFileName[param];
    }
    console.log('paramFile:'+paramFile);
    return paramFile;
    };
