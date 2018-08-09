var fs = require('fs');
var path = require('path');
var recursiveReadSync = require('recursive-readdir-sync');
var mkdir = require('../../../../lib/mkDirByPathSync.js');

module.exports = function (jsonVar, auxMountTemplateParam, auxLenghtTemplateNameSearch, campaign) {
    // if(auxMountTemplateParam != '') {
        // for (var campaignName in mountCampaign) {
            // auxCampaignName(campaignName);
            console.log('campaignNameloop:'+campaign);
            // console.log('mountCampaign2:'+this.auxCampaignName);
            // template.arrTemplateNameParam()[2] = campaignName;
            // console.log('template.arrTemplateNameParam()[2]:'+this.arrTemplateNameParam()[2]);
            // console.log('checkTemplateParam()afterchange:'+this.checkTemplateParam());
            mkdir('src\\campaign\\'+campaign+'\\' + jsonVar.name);
            fs.copyFileSync(auxLenghtTemplateNameSearch + jsonVar.name + '.hbs', './src/campaign/'+campaign+'/' + jsonVar.name + '/' + jsonVar.name + auxMountTemplateParam + '.hbs');

            // fs.copyFileSync(auxLenghtTemplateName + '/template/' + templateName + '.hbs', auxLenghtTemplateName + '/template/' + templateName + paramFile + '.hbs');
            var contentFileTemplate = fs.readFileSync('./src/campaign/'+campaign+'/' + jsonVar.name + '/' + jsonVar.name + auxMountTemplateParam + '.hbs', 'utf8');
            // console.log(contentFileTemplate);
            console.log('{{' + jsonVar.name + '.');
            console.log('{{' + jsonVar.name + auxMountTemplateParam + '.');
            var auxContentFileTemplate = contentFileTemplate.replace(new RegExp('{{' + jsonVar.name + '.', 'g'), '{{' + jsonVar.name + auxMountTemplateParam + '.');
            auxContentFileTemplate = auxContentFileTemplate.replace(new RegExp('{{#if ' + jsonVar.name + '.', 'g'), '{{#if ' + jsonVar.name + auxMountTemplateParam + '.');
            auxContentFileTemplate = auxContentFileTemplate.replace(new RegExp('{{#each ' + jsonVar.name + '.', 'g'), '{{#each ' + jsonVar.name + auxMountTemplateParam + '.');
            auxContentFileTemplate = auxContentFileTemplate.replace(new RegExp('NAME_CAMPAIGN', 'g'), campaign);
            auxContentFileTemplate = auxContentFileTemplate.replace(new RegExp('whiteOrBlack', 'g'), this.whiteOrBlack);
            auxContentFileTemplate = auxContentFileTemplate.replace(new RegExp('.vcid', 'g'), '.vcid.'+this.A_BCampaign);
            // console.log('search:'+contentFileTemplate.search(new RegExp('{{' + template.name + '.', 'g')) + ';');
            // console.log(contentFileTemplate);
            // fs.writeFileSync(auxFileNameTemplate[0] + paramFile + '.hbs.temp', auxContentFileTemplate);
            fs.writeFileSync('./src/campaign/'+campaign+'/' + jsonVar.name + '/' + jsonVar.name + auxMountTemplateParam + '.hbs', auxContentFileTemplate);
        // }
    // } else {
    //     return false;
    // }
};
