var exec = require('cordova/exec');

module.exports.add = function (arg0, success,error) {
    exec(success, error, 'MathCalulator', 'add', [arg0]);
}

module.exports.substract = function (arg0, success,error) {
    exec(success, error, 'MathCalulator', 'substract', [arg0]);
}