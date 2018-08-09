module.exports = function (loadPathJsonPartial) {
// console.log(loadPathJsonPartial);
// console.log(loadPathJsonPartial.length);

for (var i = 0; i < loadPathJsonPartial.length; i++) {
    var arrayPartialFileNames = loadPathJsonPartial[i].split('\\');
    // console.log('arrayPartialFileNames:'+arrayPartialFileNames.length+';');
    var lenghtArrayPartialFileNames = arrayPartialFileNames.length-2;
    var auxArrayPartialFileNames = '';
    for (var j = 0; j <= lenghtArrayPartialFileNames; j++) {

        // console.log('lenght:'+lenghtArrayPartialFileNames+';');
        if(j == lenghtArrayPartialFileNames){
            // console.log('j:'+j+';');
            auxArrayPartialFileNames += arrayPartialFileNames[j];
        } else if(j <= lenghtArrayPartialFileNames){
            auxArrayPartialFileNames += arrayPartialFileNames[j]+'/';
        }
    }
    loadPathJsonPartial[i] = auxArrayPartialFileNames; // TEST
}
// console.log(loadPathJsonPartial); // TEST
return loadPathJsonPartial; // TEST
};
