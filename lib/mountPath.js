module.exports.mountPath = function (arrFileName, lenghtArrFileName) {
	arrFileName[0] = 'build'
	var auxArrFileName = '';
	for (var i = 0; i < lenghtArrFileName; i++) {
		auxArrFileName += arrFileName[i] + '\\';
	}
	return auxArrFileName;
};
