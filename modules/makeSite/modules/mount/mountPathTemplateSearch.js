module.exports = function (arrFileName, lenghtArrFileNameSearch) {
    var auxLenghtTemplateName = '';
    for (var i = 0; i < lenghtArrFileNameSearch; i++) {
        auxLenghtTemplateName += arrFileName[i] + '/';
    }
    return auxLenghtTemplateName;
};
