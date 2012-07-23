/*jslint node:true*/
var fs = require('fs'),
    path = require('path'),
    HTTPStatusFile = path.resolve(__dirname + '/http_status.json'),
    codes;

codes = fs.readFileSync(HTTPStatusFile, 'UTF-8');
module.exports = JSON.parse(codes);
