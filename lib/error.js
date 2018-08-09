module.exports.errorFirstCallback = function (err, data) {
    if (err) {
        console.error('There was an error: ', err);
        return;
    }
    console.log(data);
}
