const querystring = require('querystring')

var str = 'nick=casper&age=24';
var obj = querystring.parse(str);
console.log(JSON.stringify(obj, null, 4));

var obj1 = {
    "nick": "casper",
    "age": "24"
};
var str1 = querystring.stringify(obj1);
console.log(str1);

var obj2 = {
    "name": "chyingp",
    "country": "cn"
};
var str2 = querystring.stringify(obj2, '|', '-');
console.log(str2);